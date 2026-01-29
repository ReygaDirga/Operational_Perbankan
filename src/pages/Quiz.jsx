import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import questionBank from "../data"
import { shuffle } from "../utils/shuffle"

export default function Quiz() {
  const { bab } = useParams()
  const navigate = useNavigate()
  const rawQuestions = questionBank[bab]
  if (!Array.isArray(rawQuestions)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2 text-white">Comming Soon</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-blue-900 text-white rounded"
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    )
  }

  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setQuestions(shuffle(rawQuestions))
    setIndex(0)
    setScore(0)
    setSelected(null)
  }, [bab])

  const restartQuiz = () => {
    setQuestions(shuffle(rawQuestions))
    setIndex(0)
    setScore(0)
    setSelected(null)
  }

  const current = questions[index]

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
        <div className="bg-white rounded-xl w-full max-w-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Selesai</h2>

          <p className="mb-6">
            Skor: <span className="font-semibold">{score}</span> /{" "}
            {questions.length}
          </p>

          <div className="flex gap-3">
            <button
              onClick={restartQuiz}
              className="flex-1 bg-blue-600 text-white py-2 rounded"
            >
              Ulang Latihan
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-200 py-2 rounded"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    )
  }
  const selectOption = (i) => {
    if (selected !== null) return // sudah jawab

    setSelected(i)

    if (i === current.a) {
        setScore((s) => s + 1)
    }
    setTimeout(() => {
        setIndex((i) => i + 1)
        setSelected(null)
    }, 2000)
  }


  const progress = Math.round(((index + 1) / questions.length) * 100)
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl w-full max-w-4xl p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold capitalize">
            Ujian {bab.replace("bab", "Bab ")}
          </h1>
        </div>

        <div className="mb-6">
          <p className="text-sm mb-2">
            Soal {index + 1} / {questions.length}
          </p>
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-blue-500 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <h3 className="font-semibold mb-4">{current.q}</h3>

        <div className="space-y-3">
        {current.o.map((opt, i) => {
            let base =
            "w-full text-left border rounded-lg px-4 py-3 transition"

            let state = "hover:bg-gray-100"

            if (selected !== null) {
            if (i === current.a) {
                state = "bg-green-100 border-green-500 text-green-700"
            } else if (i === selected) {
                state = "bg-red-100 border-red-500 text-red-700"
            } else {
                state = "opacity-60"
            }
            }

            return (
            <button
                key={i}
                disabled={selected !== null}
                onClick={() => selectOption(i)}
                className={`${base} ${state}`}
            >
                {opt}
            </button>
            )
        })}
        </div>


        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Homepage
          </button>
        </div>

      </div>
    </div>
  )
}

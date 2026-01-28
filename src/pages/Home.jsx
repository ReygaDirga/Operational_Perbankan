import babList from "../data/Bablist"
import BabCard from "../components/Babcard"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-2xl text-white font-bold mb-6">Latihan Ujian Operasional Perbankan</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {babList.map((bab) => (
          <BabCard key={bab.id} {...bab} />
        ))}
      </div>
    </div>
  )
}

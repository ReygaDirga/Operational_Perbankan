import { Link } from "react-router-dom"

export default function BabCard({ id, title, image, available }) {
  return (
    <div className="bg-slate-700 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold mb-3 text-white">{title}</h3>

        {available ? (
          <Link
            to={`/latihan/${id}`}
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded"
          >
            Start
          </Link>
        ) : (
          <p className="italic text-gray-400">Coming Soon</p>
        )}
      </div>
    </div>
  )
}
    
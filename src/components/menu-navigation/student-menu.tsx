import { LucideHistory, LucideHome } from 'lucide-react'
import { Link } from 'react-router-dom'

export function StudentMenu() {
  return (
    <ul className="flex flex-col items-center md:items-start justify-center space-y-4 text-lg md:text-sm">
      <li className="flex gap-4">
        <Link
          to={'/student/home'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideHome size={20} />
          Home
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/student/academic-record'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideHistory size={20} />
          Histórico Escolar
        </Link>
      </li>
    </ul>
  )
}

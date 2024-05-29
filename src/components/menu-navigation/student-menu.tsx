import { LucideHistory, LucideHome } from 'lucide-react'
import { Link } from 'react-router-dom'

export function StudentMenu() {
  return (
    <ul className="space-y-4 text-sm">
      <li className="flex gap-4">
        <Link to={'/'} className="flex items-center gap-4">
          <LucideHome size={20} />
          Home
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/courses'} className="flex items-center gap-4">
          <LucideHistory size={20} />
          Histórico Escolar
        </Link>
      </li>
    </ul>
  )
}

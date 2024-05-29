import {
  LucideHome,
  LucideBookCopy,
  LucideUsers,
  LucideUserCog,
  LucideBoxes,
  LucideSquareUser,
  LucideScrollText,
  LucideBrain,
  LucideHistory,
  LucideNotepadText,
  LucideBarChart2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function DevMenu() {
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
          <LucideBookCopy size={20} />
          Cursos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/students'} className="flex items-center gap-4">
          <LucideUsers size={20} />
          Alunos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/managers'} className="flex items-center gap-4">
          <LucideSquareUser size={20} />
          Supervisores
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/admins'} className="flex items-center gap-4">
          <LucideUserCog size={20} />
          Administradores
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/notes'} className="flex items-center gap-4">
          <LucideScrollText size={20} />
          Notas
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/behaviors'} className="flex items-center gap-4">
          <LucideBrain size={20} />
          Comportamentos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/reports'} className="flex items-center gap-4">
          <LucideNotepadText size={20} />
          Relatórios
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/classification'} className="flex items-center gap-4">
          <LucideBarChart2 size={20} />
          Classificação
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/management'} className="flex items-center gap-4">
          <LucideBoxes size={20} />
          Gerenciamento de dados
        </Link>
      </li>
      <li className="flex gap-4">
        <Link to={'/academic-record'} className="flex items-center gap-4">
          <LucideHistory size={20} />
          Histórico Escolar
        </Link>
      </li>
    </ul>
  )
}

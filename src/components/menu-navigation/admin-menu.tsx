import { Link } from 'react-router-dom'
import {
  LucideHome,
  LucideBookCopy,
  LucideUsers,
  LucideBoxes,
  LucideScrollText,
  LucideBrain,
  LucideHistory,
  LucideBarChart2,
  LucideSquareUser,
  LucideNotepadText,
} from 'lucide-react'

export function AdminMenu() {
  return (
    <ul className="flex flex-col items-center md:items-start justify-center space-y-4 text-lg md:text-sm">
      <li className="flex gap-4">
        <Link
          to={'/'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideHome size={20} />
          Home
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/courses'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideBookCopy size={20} />
          Cursos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/students'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideUsers size={20} />
          Alunos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/managers'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideSquareUser size={20} />
          Supervisores
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/notes'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideScrollText size={20} />
          Notas
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/behaviors'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideBrain size={20} />
          Comportamentos
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/reports'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideNotepadText size={20} />
          Relatórios
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/classification'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideBarChart2 size={20} />
          Classificação
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/management'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideBoxes size={20} />
          Gerenciamento de dados
        </Link>
      </li>
      <li className="flex gap-4">
        <Link
          to={'/academic-record'}
          className="flex items-center justify-center gap-4 md:justify-start"
        >
          <LucideHistory size={20} />
          Histórico Escolar
        </Link>
      </li>
    </ul>
  )
}

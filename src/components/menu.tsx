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
  LucideCircleUser,
} from 'lucide-react'

export function Menu() {
  return (
    <aside className="bg-custom-blue h-[55rem] w-full max-w-60 space-y-14 px-4 py-8 text-white">
      <nav>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-4">
            <a href="/home" className="flex items-center gap-4">
              <LucideHome size={20} />
              Home
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/courses" className="flex items-center gap-4">
              <LucideBookCopy size={20} />
              Cursos
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/students" className="flex items-center gap-4">
              <LucideUsers size={20} />
              Alunos
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/supervisors" className="flex items-center gap-4">
              <LucideSquareUser size={20} />
              Supervisores
            </a>
          </li>
          <li className="flex gap-4">
            <a href="admin" className="flex items-center gap-4">
              <LucideUserCog size={20} />
              Administradores
            </a>
          </li>
          <li className="flex gap-4">
            <a href="notes" className="flex items-center gap-4">
              <LucideScrollText size={20} />
              Notas
            </a>
          </li>
          <li className="flex gap-4">
            <a href="behaviors" className="flex items-center gap-4">
              <LucideBrain size={20} />
              Comportamentos
            </a>
          </li>
          <li className="flex gap-4">
            <a href="reports" className="flex items-center gap-4">
              <LucideNotepadText size={20} />
              Relatórios
            </a>
          </li>
          <li className="flex gap-4">
            <a href="classification" className="flex items-center gap-4">
              <LucideBarChart2 size={20} />
              Classificação
            </a>
          </li>
          <li className="flex gap-4">
            <a href="data-management" className="flex items-center gap-4">
              <LucideBoxes size={20} />
              Gerenciamento de dados
            </a>
          </li>
          <li className="flex gap-4">
            <a href="academic-record" className="flex items-center gap-4">
              <LucideHistory size={20} />
              Histórico Escolar
            </a>
          </li>
        </ul>
      </nav>
      <div className="border-y-2 py-4">
        <a href="#" className="flex gap-4 text-sm tracking-wider">
          <LucideCircleUser size={20} />
          Perfil
        </a>
      </div>
    </aside>
  )
}

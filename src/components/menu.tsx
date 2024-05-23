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
    <aside className="h-[55rem] w-full max-w-60 space-y-14 bg-blue-950 px-4 py-8 text-white">
      <nav>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-4">
            <a href="/home" className="flex items-center gap-4">
              <LucideHome size={20} />
              Home
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/cursos" className="flex items-center gap-4">
              <LucideBookCopy size={20} />
              Cursos
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/alunos" className="flex items-center gap-4">
              <LucideUsers size={20} />
              Alunos
            </a>
          </li>
          <li className="flex gap-4">
            <a href="/supervisores" className="flex items-center gap-4">
              <LucideSquareUser size={20} />
              Supervisores
            </a>
          </li>
          <li className="flex gap-4">
            <a>
              <LucideUserCog size={20} />
              Administradores
            </a>
          </li>
          <li className="flex gap-4">
            <LucideScrollText size={20} />
            Notas
          </li>
          <li className="flex gap-4">
            <LucideBrain size={20} />
            Comportamentos
          </li>
          <li className="flex gap-4">
            <LucideNotepadText size={20} />
            Relatórios
          </li>
          <li className="flex gap-4">
            <LucideBarChart2 size={20} />
            Classificação
          </li>
          <li className="flex gap-4">
            <LucideBoxes size={20} />
            Gerenciamento de dados
          </li>
          <li className="flex gap-4">
            <LucideHistory size={20} />
            Histórico Escolar
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

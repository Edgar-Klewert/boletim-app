import { LucideLogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

import LogoBoletim from '@/assets/dgec.png'

interface HeaderProps {
  isLogged: boolean
}

export function Header({ isLogged }: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center border-b-[1px] border-red-600 bg-white px-2 py-2 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
      <Link to={'/'} className="flex items-center md:gap-4">
        <img src={LogoBoletim} alt="Logo" className="flex h-10 w-auto" />
        <h1 className="text-lg font-bold uppercase">
          Boletim Acadêmico - PMPA
        </h1>
      </Link>

      {isLogged && (
        <button className="ml-auto flex items-center gap-1 rounded text-red-500">
          <LucideLogOut size={20} />
          Sair
        </button>
      )}
    </header>
  )
}

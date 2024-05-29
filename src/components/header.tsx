import { LucideLogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

import LogoBoletim from '@/assets/dgec.png'

interface HeaderProps {
  isLogged: boolean
}

export function Header({ isLogged }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b-[1px] border-red-600 bg-white px-2">
      <Link to={'/'} className="flex items-center">
        <img src={LogoBoletim} alt="Logo" className="mr-4 flex h-10 w-auto" />
        <h1 className="text-lg font-bold uppercase">
          Boletim Acadêmico - PMPA
        </h1>
      </Link>

      {isLogged && (
        <button className="flex items-center gap-1 rounded text-red-500">
          <LucideLogOut size={20} />
          Sair
        </button>
      )}
    </header>
  )
}

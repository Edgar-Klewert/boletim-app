import { LucideSearch, LucideLogOut } from 'lucide-react'
import { Menu } from './components/menu'

export function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <header className="flex h-16 items-center justify-between border-b-[1px] border-red-600 bg-white px-2">
        <a className="flex items-center">
          <img
            src="./src/assets/dgec.png"
            alt="Logo"
            className="mr-4 flex h-10 w-auto"
          />
          <h2 className="font-bold uppercase">Boletim Acadêmico</h2>
        </a>
        <button className="flex items-center gap-1 rounded text-red-500">
          <LucideLogOut size={20} />
          Sair
        </button>
      </header>
      <div className="flex">
        <Menu />

        <main className="flex flex-1 flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-950">
            O que você deseja buscar?
          </h1>
          <span className="text-sm font-medium text-blue-950">
            Encontre os alunos pelo pesquisa global
          </span>
          <div className="flex w-full max-w-3xl items-center gap-4 rounded-full bg-white px-6 py-4">
            <LucideSearch size={20} className="h-4 w-4 text-slate-600" />
            <input
              type="text"
              placeholder="Busque por nome ou cpf..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
            <button className="hidden"></button>
          </div>
        </main>
      </div>
    </div>
  )
}

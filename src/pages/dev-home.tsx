import { LucideSearch } from 'lucide-react'
 
export function DevHome() {

  return (
    <div className="w-full h-full">
      <div className="flex items-center h-full">
          <main className="flex flex-1 flex-col items-center justify-center space-y-4 px-2">
            <h1 className="text-center text-4xl font-bold text-blue-950">
              O que você deseja buscar?
            </h1>
            <span className="text-sm font-medium text-blue-950">
              Encontre os alunos pela pesquisa global
            </span>
            <div className="flex w-full max-w-3xl items-center gap-4 rounded-full bg-white px-6 py-2">
              <LucideSearch size={20} className="h-4 w-4 text-slate-600" />
              <input
                type="text"
                placeholder="Busque por nome ou cpf..."
                className="flex-1 bg-transparent py-2 hover:outline-2"
              />
              <button className="hidden"></button>
            </div>
          </main>
      </div>
    </div>
  )
}

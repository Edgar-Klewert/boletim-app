import { LucideSearch } from 'lucide-react'
import { Role } from '@/utils/enum-role-type'

export function Home() {
  const role: Role = Role.STUDENT

  return (
    <div className="h-full w-full">
      <div className="flex">
        {role !== Role.STUDENT && (
          <main className="flex h-full flex-1 flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-950">
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
        )}

        {role === Role.STUDENT && (
          <main className="w-full py-6">
            <section className="mx-auto w-full max-w-7xl">
              <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
                Seus cursos
              </h2>

              <div className="mx-auto my-8 grid w-full max-w-6xl grid-cols-3">
                <div className="flex flex-col items-center space-y-2 px-2">
                  <div className="h-60 w-full max-w-72 bg-gray-400"></div>
                  <span className="font-medium">CFP - 2022</span>
                </div>
                <div className="flex flex-col items-center space-y-2 px-2">
                  <div className="h-60 w-full max-w-72 bg-gray-400"></div>
                  <span className="font-medium">CAS - 2023</span>
                </div>
                <div className="flex flex-col items-center space-y-2 px-2">
                  <div className="h-60 w-full max-w-72 bg-gray-400"></div>
                  <span className="font-medium">CFO - 2022</span>
                </div>
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  )
}

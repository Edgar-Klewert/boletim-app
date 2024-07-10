    import { useState } from 'react'

    export function Reports() {

    const [selectedFilter, setSelectedFilter] = useState('Todos');

    return (
      <div className="w-full py-6">
        <section className="mx-auto w-full max-w-[90rem]">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Relatórios
          </h2>

          <div className="group relative mx-auto my-8 h-[46rem] max-h-screen  max-w-6xl overflow-auto rounded bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-8">
            <div className="flex w-full max-w-3xl items-center gap-4 rounded-full bg-white px-2 py-2">
              <input
                type="text"
                placeholder="Busque pelo nome ..."
                className="flex-1 roundend-lg border border-gray-500 bg-transparent wpx-4 rounded-lg px-4 py-2 focus:outline-none focus:border-pmpa-blue-500 "
              />
              <button className="hidden"></button>
            </div>
            <div className='flex items-center space-x-4'>
              <label htmlFor="filter" className="block text-black font-bold ">
               Filtrar Por:
              </label>
              <select
                id="filter"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className=" flex-1 shadow  roundend-lg border border-gray-500 w-full rounded-lg py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="Aluno">Aluno</option>
                <option value="Gestor">Gestor</option>
              </select>
            </div>
            </div>
  
            <div className="text-center">
              <button className="bg-pmpa-blue-700 text-white font-bold py-2 px-10 rounded ">
                TODOS OS RELATÓRIOS
              </button>

              <div className='py-2 flex-1 items-center'>
              <select
                id="filter_reports"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="text-center shadow roundend-lg border border-gray-500 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                <option value="Todos">TODOS</option>
                <option value="Adições">ADIÇÕES</option>
                <option value="Remoções">REMOÇÕES</option>
                <option value="Alterações">ALTERAÇÕES</option>
                <option value="Login">LOGIN</option>
              </select>
            </div>
            </div>
          </div>
        </section>    
      </div>
    );
  }
  
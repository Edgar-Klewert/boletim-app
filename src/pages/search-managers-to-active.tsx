import { useState } from 'react'

export function SearchManagersToActive(){

    const [selectedFilter, setSelectedFilter] = useState('Todos');

  return(
      <div className="w-full py-6">
          <section className="mx-auto w-full max-w-[90rem]">
              <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
                  Ativar Gestor
              </h2>

              <form className="my-8 flex flex-col items-center justify-center gap-6">
                  <h3 className="text-2xl font-bold">
                      Pesquisar pelo gestor que deseja ativar
                  </h3>
                  <div className="flex w-full max-w-3xl items-center justify-center gap-4">
                      <input 
                        type="text"
                        className="w-full rounded-sm p-3"
                        placeholder="John Doe..." 
                      />
                      <button className="hidden">Buscar</button>
                  </div>
                  <div className='items-center space-x'>
                    <h2 className='flex w-full justify-center py-3 font-semibold'>SELECIONE O POLO</h2>
                    <select 
                    id="filter_search_managers_to_active"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className='flex shadow rounded-lg border border-gray-500 w-full py-1 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                        <option value="todos">TODOS OS POLOS</option>
                        <option value="cfap">CFAP</option>  
                        <option value="belem">BELÉM</option>
                        <option value="maraba">MARABÁ</option>
                    </select>
                  </div>
              </form>
          </section>
      </div>
  )
}
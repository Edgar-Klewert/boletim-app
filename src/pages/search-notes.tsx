import { useState } from 'react';

export function SearchNotes() {

  const [selectedFilter, setSelectedFilter] = useState('todos');

  return (
    <div className="w-full py-6"> 
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Buscar alunos
        </h2>

        <form className="my-8 flex flex-col items-center justify-center gap-6">
          <h3 className="text-2xl font-bold">
            Pesquise pelo nome do Aluno que deseja atualizar.
          </h3>
          <div className="flex w-full max-w-3xl items-center justify-center gap-4">
            <input
              type="text"
              className="w-full rounded-sm p-3"
              placeholder="John Doe..."
            />
            <button className="hidden">Buscar</button>
          </div>
          <div className="items-center"> 
            <h2 className='flex w-full justify-center py-2 font font-semibold'>SELECIONE O POLO</h2>
            <select
              id="filter_search_notes" 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="flex shadow rounded-lg border border-gray-500 w-full py-1 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="todos">TODOS OS POLOS</option>
              <option value="cfap">CFAP</option>
            </select>
          </div>
        </form>
      </section>
    </div>
  );
}

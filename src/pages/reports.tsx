    import { useState } from 'react'

    export function Reports() {

    const [selectedFilter, setSelectedFilter] = useState('Todos');
    const handleFilterChange = (filter: string) => {
      setSelectedFilter(filter);
    };

    return (
      <div className="w-full py-6">
        <section className="mx-auto w-full max-w-[90rem]">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Relatórios
          </h2>

          <div className="group relative mx-auto my-8 h-[46rem] max-h-screen  max-w-4xl overflow-auto rounded bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input
                  type="text"
                  className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-pmpa-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  className={`rounded-lg px-4 py-2 text-white ${
                    selectedFilter === 'Aluno' ? 'bg-pmpa-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleFilterChange('Aluno')}
                >
                  Aluno
                </button>
                <button
                  className={`rounded-lg px-4 py-2 text-white ${
                    selectedFilter === 'Todos' ? 'bg-pmpa-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleFilterChange('Todos')}
                >
                  Todos
                </button>
              </div>
            </div>
  
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-pmpa-blue-700 text-white font-bold py-2 px-4 rounded">
                TODOS OS RELATÓRIOS
              </button>
            </div>
          </div>
        </section>
      
      
      </div>
    );
  }
  
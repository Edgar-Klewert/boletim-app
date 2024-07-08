import { useState } from 'react';

export function UpdateBehavior() {
  const [selectedYear, setSelectedYear] = useState('2024');

  return (
    <div className="w-full py-6">
        <section className='mx-auto w-full max-w-[90rem]'>
        <h2 className="w-full border-b-2 py-4 border-b-black text-xl font-semibold">
          Atualizar comportamento
        </h2>
      
      <div className="mb-4 py-6">
        <input type="text" placeholder="PESQUISE POR NOME, CPF" className="border p-2 rounded w-full" />
      </div>
      
      <div className="mb-4">
        <select className="border p-2 rounded w-full">
          <option>TODOS OS POLOS</option>
          <option>BELÉM</option>
          <option>SANTARÉM</option>
          <option>CASTANHAL</option>
        </select>
      </div>
      
      <div className="mb-4">
        <select className="border p-2 rounded w-full" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="border p-4 rounded mb-4">
        <h2 className="text-lg font-bold mb-4">Nome: ADENOR DE OLIVEIRA ELIAS</h2>
        <p>Curso: CAS TURMA - 2024</p>
        <p>Polo: SANTARÉM</p>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'].map((month) => (
            <div key={month} className="flex flex-col items-center">
              <label>{month}</label>
              <input type="text" placeholder="0,00" className="border p-2 bg-pmpa-blue-500 rounded w-full text-white text-center" />
            </div>
          ))}
        </div>
        <div>
        <button
              type="submit"
              className="ml-auto block rounded bg-pmpa-blue-800 px-3 py-2 my-3 text-white hover:bg-pmpa-blue-500"
              >
              Atualizar
            </button>
        </div>
      </div>
      
      {}
      <div className="border p-4 rounded mb-4">
        <h2 className="text-lg font-bold mb-4">Nome: AGOSTINHO DE SOUZA</h2>
        <p>Curso: CAS TURMA - 2024</p>
        <p>Polo: CASTANHAL</p>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'].map((month) => (
            <div key={month} className="flex flex-col items-center">
              <label>{month}</label>
              <input type="text" placeholder="0,00" className="border p-2  bg-pmpa-blue-500 text-white rounded w-full text-center" />
            </div>
          ))}
        </div>
        <div>
        <button
              type="submit"
              className="ml-auto block rounded bg-pmpa-blue-800 px-3 py-2 my-3 text-white hover:bg-pmpa-blue-500"
              >
              Atualizar
            </button>
        </div>
      </div>
      </section>
    </div>
  );
}

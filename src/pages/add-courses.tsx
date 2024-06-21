import { useState } from 'react';

export function AddCourses() {
  const [name, setName] = useState<string>('');
  const [module, setModule] = useState<string>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [weight, setWeight] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Course data submitted:', { name, module, quantity, weight });
  };

  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Adicionar Cursos
        </h2>

        <div className="group relative mx-auto my-14 h-[40rem] max-h-screen max-w-4xl overflow-auto rounded bg-pmpa-blue-700">
          <form className="w-full space-y-4 p-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-gray-200">
                Definir o nome do curso:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite o nome do curso"
              />
            </div>

            <div>
              <label htmlFor="module" className="block text-gray-200 mb-2">
                Este curso terá módulo, período ou ano?
              </label>
              <select
                id="module"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione</option>
                <option value="módulo">Módulo</option>
                <option value="período">Período</option>
                <option value="ano">Ano</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="block text-gray-200 mb-2">
                Quantidade de módulos
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-gray-200 mb-2">
                Este curso terá peso sob os módulos?
              </label>
              <select
                id="weight"
                value={weight.toString()}
                onChange={(e) => setWeight(e.target.value === 'true')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="false">Não</option>
                <option value="true">Sim</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="startDate" className="text-sm text-gray-200">
                DATA DE INÍCIO:
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite a data de início do curso"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="endDate" className="text-sm text-gray-200">
                DATA DE CONCLUSÃO:
              </label>
              <input
                type="date"
                id="endDate"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite a data de conclusão do curso"
              />
            </div>
            <button
              type="submit"
              className="ml-auto block rounded bg-blue-800 px-3 py-2 text-white hover:bg-blue-700"
            >
              Adicionar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';

const AddCourses = () => {
  const [name, setName] = useState<string>('');
  const [module, setModule] = useState<string>('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [weight, setWeight] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Course data submitted:', { name, module, quantity, weight });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Definir Informações Sobre o Curso</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Defina o nome do Curso
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="module" className="block text-gray-700 font-bold mb-2">
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
          <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
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
          <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
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
        <button
          type="submit"
          className="bg-pmpa-blue-500 hover:bg-pmpa-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Próximo
        </button>
      </form>
    </div>
  );
};

export default AddCourses;
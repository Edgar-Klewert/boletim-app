export function AddCourses() {
  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Adicionar Cursos
        </h2>

        <div className="group relative mx-auto my-14 h-[40rem] max-h-screen max-w-4xl overflow-auto rounded bg-pmpa-blue-700">
          <form className="w-full space-y-4 p-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-gray-200">
                Definir o nome do curso:
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                placeholder="Digite o nome do curso"
              />
            </div>

            <div>
              <label htmlFor="module" className="mb-2 block text-gray-200">
                Este curso terá módulo, período ou ano?
              </label>
              <select
                id="module"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              >
                <option value="selecione">Selecione</option>
                <option value="módulo">Módulo</option>
                <option value="período">Período</option>
                <option value="ano">Ano</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="mb-2 block text-gray-200">
                Quantidade de módulos
              </label>
              <input
                type="number"
                id="quantity"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="weight" className="mb-2 block text-gray-200">
                Este curso terá peso sob os módulos?
              </label>
              <select
                id="weight"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
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
                className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                placeholder="Digite a data de conclusão do curso"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="image" className="text-sm text-gray-200">
                Adicionar imagem do curso:
              </label>
              <input
                type="file"
                id="image"
                className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                accept="image/*"
              />
            </div>

            <button
              type="submit"
              className="ml-auto block rounded bg-pmpa-blue-500 px-3 py-2 text-white hover:bg-pmpa-blue-900"
            >
              Adicionar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

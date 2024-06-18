export function UpdateCourses() {
  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Atualizar alunos
        </h2>

        <div className="group relative mx-auto my-14 h-[40rem] max-h-screen  max-w-4xl overflow-auto rounded bg-pmpa-blue-700">
          <form className="w-full space-y-4 p-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-gray-200">
                Nome curso:
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite o nome do curso"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="data" className="text-sm text-gray-200">
                DATA DE INÍCIO:
              </label>
              <input
                type="date"
                id="data"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite a data de início do curso"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="data" className="text-sm text-gray-200">
                DATA DE CONLUSÃO:
              </label>
              <input
                type="date"
                id="data"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
                placeholder="Digite a data de conclusão do curso"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="course" className="text-sm text-gray-200">
                Selecione o curso
              </label>
              <select
                id="course"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
              >
                <option value="">Selecione um curso</option>
                <option value="curso1">CAS</option>
                <option value="curso2">CFP</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="pole" className="text-sm text-gray-200">
                Selecione o polo
              </label>
              <select
                id="pole"
                className="w-full rounded px-4 py-3 text-sm text-gray-700"
              >
                <option value="">Selecione um polo</option>
                <option value="belém">Belém</option>
                <option value="santarem">Santarém</option>
              </select>
            </div>
            <button
              type="submit"
              className="ml-auto block rounded bg-blue-800 px-3 py-2 text-white hover:bg-blue-700"
            >
              Atualizar
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

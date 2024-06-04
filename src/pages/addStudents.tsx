export function AddStudents() {
  return (
    <main className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Adicionar alunos
        </h2>

        <div className="mx-auto my-8 flex h-screen w-full max-w-7xl grid-cols-3 gap-y-8 bg-pmpa-default-blue">
          <div className="w-1/2 p-8">
            <div className="mb-4">
              <label
                htmlFor="nome-completo"
                className="mb-2 block text-sm font-bold text-gray-200"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="nome-completo"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cpf"
                className="mb-2 block text-sm font-bold text-gray-200"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="curso"
                className="mb-2 block text-sm font-bold text-gray-200"
              >
                Selecione o curso
              </label>
              <select
                id="curso"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              >
                <option value="">Selecione um curso</option>
                <option value="curso1">CAS</option>
                <option value="curso2">CFP</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="polo"
                className="mb-2 block text-sm font-bold text-gray-200"
              >
                Selecione o polo
              </label>
              <select
                id="polo"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              >
                <option value="">Selecione um polo</option>
                <option value="polo1">Belém</option>
                <option value="polo2">Santarém</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 p-8">
            <button
              className="focus:shadow-outline rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              ADICIONAR
            </button>
            <button
              className="focus:shadow-outline mt-4 rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-400 focus:outline-none"
              type="button"
            >
              VOLTAR
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

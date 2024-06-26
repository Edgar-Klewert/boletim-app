export function AddBehaviorsBatch() {
  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Adicionar comportamentos em lote
        </h2>

        <form>
          <div className="mb-4 py-8">
            <label
              htmlFor="file"
              className="mb-2 block font-bold text-slate-700"
            >
              Selecione um arquivo
            </label>
            <input
              type="file"
              id="file"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-pmpa-blue-500 px-4 py-2 font-bold text-white hover:bg-pmpa-blue-700 focus:outline-none"
            >
              Inserir Comportamentos
            </button>
            <button
              className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-slate-700 focus:outline-none"
              onClick={() => window.history.back()}
            >
              Voltar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

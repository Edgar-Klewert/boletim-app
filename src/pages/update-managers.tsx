export function UpdateManagers() {
    return (
      <div className="w-full py-6">
        <section className="mx-auto w-full max-w-[90rem]">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Atualizar supervisores
          </h2>
  
          <div className="mx-auto my-8 w-full max-w-4xl rounded bg-pmpa-blue-700">
            <form className="w-full space-y-4 p-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm text-gray-200">
                  Nome completo:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite seu nome completo..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-gray-200">
                  E-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite seu email..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="senha" className="text-sm text-gray-200">
                  Senha:
                </label>
                <input
                  type="senha"
                  id="senha"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite sua senha..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="data" className="text-sm text-gray-200">
                  DATA DE NASCIMENTO:
                </label>
                <input
                  type="data"
                  id="data"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite sua data de nascimento..."
                />
              </div>
              <button type="submit" className="ml-auto block rounded bg-blue-800 px-3 py-2 text-white hover:bg-blue-700">
                Adicionar
              </button>
            </form>
          </div>
        </section>
      </div>
    )
  }
  
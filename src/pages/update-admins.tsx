export function UpdateAdmins() {
    return (
      <div className="w-full py-6">
        <section className="mx-auto w-full max-w-[90rem]">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Atualizar alunos
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
                  type="password"
                  id="senha"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite sua senha..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="pai" className="text-sm text-gray-200">
                  Pai:
                </label>
                <input
                  type="text"
                  id="pai"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite o nome completo do pai..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mãe" className="text-sm text-gray-200">
                  Mãe:
                </label>
                <input
                  type="text"
                  id="mãe"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite o nome completo da mãe..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="civil" className="text-sm text-gray-200">
                  RG CIVIL:
                </label>
                <input
                  type="text"
                  id="civil"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite seu RG CIVIL..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="civil" className="text-sm text-gray-200">
                  RG MILITAR:
                </label>
                <input
                  type="text"
                  id="militar"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite seu RG MILITAR..."
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="data" className="text-sm text-gray-200">
                  DATA DE NASCIMENTO:
                </label>
                <input
                  type="date"
                  id="data"
                  className="w-full rounded px-4 py-3 text-sm text-gray-700"
                  placeholder="Digite sua data de nascimento..."
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
              <button type="submit" className="ml-auto block rounded bg-blue-800 px-3 py-2 text-white hover:bg-blue-700">
                Adicionar
              </button>
            </form>
          </div>
        </section>
      </div>
    )
  }
  
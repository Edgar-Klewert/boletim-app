export function SearchActiveHistory(){
    return (
        <div className="w-full py-6">
          <section className="mx-auto w-full max-w-[90rem]">
            <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
              Ativar Histórico - "Nome do curso"
            </h2>
    
            <div className="relative mx-auto my-14 max-w-4xl overflow-auto rounded bg-pmpa-blue-700">
              <form className="w-full space-y-4 p-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-200">
                    Nome da turma:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Nome da turma (Obrigatório)"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="data" className="text-sm text-gray-200">
                    Data de início do curso:
                  </label>
                  <input
                    type="date"
                    id="data"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Digite a data de início do curso"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="data" className="text-sm text-gray-200">
                    Data de conclusão do curso:
                  </label>
                  <input
                    type="date"
                    id="data"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Digite a data de conclusão do curso"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-200">
                    Palestras (Horas):
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Ex: 20H/A (obrigatório)"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-200">
                    Estágio (Horas):
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Estágio Supervisionado (obrigatório)"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-200">
                    CMT do CFAP:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="CMT do CFAP (obrigatório)"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm text-gray-200">
                    Chefe da divisão de ensino:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-sm px-4 py-3 text-sm text-gray-700"
                    placeholder="Chefe da divisão de ensino (obrigatório)"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      )
}
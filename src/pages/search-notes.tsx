export function SearchNotes() {
    return (
      <div className="w-full py-6"> 
        <section className="mx-auto w-full max-w-[90rem]">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Buscar alunos
          </h2>
  
          <form className="my-8 flex flex-col items-center justify-center gap-6">
            <h3 className="text-2xl font-bold">
              Pesquise pelo nome do Aluno que deseja atualizar.
            </h3>
            <div className="flex w-full max-w-3xl items-center justify-center gap-4">
              <input
                type="text"
                className="w-full rounded-sm p-3"
                placeholder="John Doe..."
              />
              <button className="hidden">Buscar</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
  
export function BehaviorRemove() {
  const alunos = [
    { nome: 'ADENOR DE OLIVEIRA ELIAS', curso: 'CAS TURMA I - 2024', polo: 'SANTARÉM' },
    { nome: 'AGOSTINHO DE SOUZA', curso: 'CAS TURMA I - 2024', polo: 'CASTANHAL' },
    { nome: 'AILTON VASCONCELOS HIANES FILHO', curso: 'CAS TURMA I - 2024', polo: 'CASTANHAL' },
  ];

  const meses = [
    'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 
    'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
  ];

  const handleClick = (nome: string, mes: string) => {
    if (window.confirm(`Você confirma a seleção do mês ${mes} para o aluno ${nome}?`)) {
      console.log(`Mês ${mes} confirmado para o aluno ${nome}`);
    } else {
      console.log(`Mês ${mes} não confirmado para o aluno ${nome}`);
    }
  };

  return (
    <div className="flex items-center justify-center py-6">
      <div className="w-full max-w-[90rem] p-6">
        <section>
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold mb-4">
            Remover Comportamento
          </h2>
          
          <span className="bg-pmpa-blue-500 text-white font-bold py-4 px-28 rounded mb-6 block text-center">
            SELECIONE O ANO E O PERÍODO
          </span>
          {alunos.map((aluno, index) => (
            <div key={index} className="mb-6">
e              <h3 className="font-bold">{aluno.nome}</h3>
              <p>Curso: {aluno.curso}</p>
              <p>Polo: {aluno.polo}</p>
              <div className="flex flex-wrap space-x-2 mt-2 justify-center">
                {meses.map((mes, mesIndex) => (
                  <button
                    key={mesIndex}
                    className="bg-pmpa-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
                    onClick={() => handleClick(aluno.nome, mes)}
                  >
                    {mes}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

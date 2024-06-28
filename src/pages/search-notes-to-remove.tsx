import { useState } from 'react';

export function SearchNotesToRemove() {

  const [searchTerm, setSearchTerm] = useState('');
  const [disciplinas] = useState([
    
    'Armamento Policial',
    'Direito Penal',
    'Direito Processual Penal',
    'Legislação Penal Especial',
    'Criminologia',
    'Polícia Judiciária',
    'Investigação Criminal',
    'Técnicas de Interrogatório',
    'Ciência Forense',
    'Balística Forense',
    'Documentoscopia',
    'Datiloscopia',
    'Fotografia Forense',
    'Medicina Legal',
    'Odontologia Legal',
    'Psicologia Forense',
    'Sociologia Jurídica',
    'Direitos Humanos',
    'Ética Profissional',
    'Administração Policial',
    'Gestão de Pessoas',
    'Planejamento Estratégico',
    'Orçamento Público',
    'Logística Policial',
    'Comunicação Policial',
    'Relações Públicas',
    'Atendimento ao Público',
    'Segurança Pública',
    'Inteligência Policial',
    'Controle de Multidões',
    'Operações Policiais Especiais',
    'Táticas Policiais',
    'Defesa Pessoal',
    'Atividade Física',
    'Primeiros Socorros',
  ]);

  const filteredDisciplinas = searchTerm
    ? disciplinas.filter((disciplina) =>
        disciplina.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : disciplinas;

  return (
    <div className="container mx-auto p-4">
      <section className='mx-auto w-full max-w[90rem]'>
      <h2 className=" w-full border-b-2 border-black py-4 text-xl font-semibold">Disciplinas</h2>
      <div className="flex py-4 items-center mb-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Pesquise pela disciplina"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDisciplinas.map((disciplina, index) => (
          <div
            key={index}
            className="bg-pmpa-blue-500 hover:bg-pmpa-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            <a href={`/disciplinas/${disciplina.toLowerCase()}`}>
              {disciplina}
            </a>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

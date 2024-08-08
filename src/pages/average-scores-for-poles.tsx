import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { PDFDownloadLink } from '@react-pdf/renderer';
import GeneralClassificationViewer from '@/components/templates/general-classification-viewer';

export function AverageScoresForPoles() {
  const data = {
    labels: ['Notas Muito Boas'],
    datasets: [
      {
        data: [100],
        backgroundColor: ['#32CD32'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const pdfData = [
    { class: '1º', qav: '30/30', qc: '10/10', rg: '23826', name: 'Lucas Pereira da Silva', average: '9.784', concept: 'Muito Bom', dob: '01/01/1975', polo: 'SANTARÉM', status: 'APROVADO' },
    { class: '2º', qav: '30/30', qc: '8/10', rg: '23751', name: 'Mariana Souza Ferreira', average: '9.724', concept: 'Muito Bom', dob: '01/01/1924', polo: 'SANTARÉM', status: 'APROVADO' },
    { class: '3º', qav: '27/30', qc: '9/10', rg: '23751', name: 'Eduardo Alves Lima', average: '9.700', concept: 'Muito Bom', dob: '01/01/2000', polo: 'SANTARÉM', status: 'APROVADO' },
    { class: '4º', qav: '20/30', qc: '5/10', rg: '23751', name: 'Camila Rocha Costa', average: '9.724', concept: 'Muito Bom', dob: '01/01/1924', polo: 'SANTARÉM', status: 'APROVADO' },
  ];

  return (
    <div className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className='w-full border-b-2 mb-4 border-b-black text-xl font-semibold'>
          Classificação
        </h2>
        <div className="bg-pmpa-blue-500 rounded-lg p-4 mb-4 flex justify-center items-center">
          <div className="w-1/3 text-center text-white font-bold">Notas Muito Boas</div>
          <div className="w-1/4">
            <Pie data={data} options={options} />
          </div>
        </div>

        <div className="text-center font-bold mb-6">
          <span className="text-black">Classificação Geral: CAS - 2023</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="bg-pmpa-blue-500 border-b">
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">CLASS</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">Q.AV</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">Q.C</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">RG</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">NOME COMPLETO</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">MÉDIA FINAL</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">CONCEITO</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">DATA DE NASCIMENTO</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">POLO</th>
                <th className="py-2 px-4 text-left text-sm font-semibold text-white">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {pdfData.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.class}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.qav}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.qc}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.rg}</td>           
                  <td className="py-2 px-4 text-sm text-slate-700">{row.name}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.average}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.concept}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.dob}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.polo}</td>
                  <td className="py-2 px-4 text-sm text-slate-700">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <PDFDownloadLink
            document={<GeneralClassificationViewer data={pdfData} />}
            fileName="classificacao-geral-2023.pdf"
          >
            {({ loading }) =>
              loading ? 'Preparing document...' : <button className="px-4 py-2 bg-pmpa-blue-500 text-white rounded">Download PDF</button>
            }
          </PDFDownloadLink>
        </div>
      </section>
    </div>
  );
}
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export function GeneralClassification() {
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
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">1º</td>
                <td className="py-2 px-4 text-sm text-slate-700">23826</td>
                <td className="py-2 px-4 text-sm text-slate-700">Igor Bomba</td>
                <td className="py-2 px-4 text-sm text-slate-700">9.784</td>
                <td className="py-2 px-4 text-sm text-slate-700">Muito Bom</td>
                <td className="py-2 px-4 text-sm text-slate-700">01/01/1975</td>
                <td className="py-2 px-4 text-sm text-slate-700">SANTARÉM</td>
                <td className="py-2 px-4 text-sm text-slate-700">APROVADO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">2º</td>
                <td className="py-2 px-4 text-sm text-slate-700">23751</td>
                <td className="py-2 px-4 text-sm text-slate-700">Alan Gay</td>
                <td className="py-2 px-4 text-sm text-slate-700">9.724</td>
                <td className="py-2 px-4 text-sm text-slate-700">Muito Bom</td>
                <td className="py-2 px-4 text-sm text-slate-700">01/01/1924</td>
                <td className="py-2 px-4 text-sm text-slate-700">SANTARÉM</td>
                <td className="py-2 px-4 text-sm text-slate-700">APROVADO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">3º</td>
                <td className="py-2 px-4 text-sm text-slate-700">23751</td>
                <td className="py-2 px-4 text-sm text-slate-700">Felipe Fumas</td>
                <td className="py-2 px-4 text-sm text-slate-700">9.700</td>
                <td className="py-2 px-4 text-sm text-slate-700">Muito Bom</td>
                <td className="py-2 px-4 text-sm text-slate-700">01/01/2000</td>
                <td className="py-2 px-4 text-sm text-slate-700">SANTARÉM</td>
                <td className="py-2 px-4 text-sm text-slate-700">APROVADO</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-slate-700">4º</td>
                <td className="py-2 px-4 text-sm text-slate-700">23751</td>
                <td className="py-2 px-4 text-sm text-slate-700">Paulo Coleta </td>
                <td className="py-2 px-4 text-sm text-slate-700">9.724</td>
                <td className="py-2 px-4 text-sm text-slate-700">Muito Bom</td>
                <td className="py-2 px-4 text-sm text-slate-700">01/01/1924</td>
                <td className="py-2 px-4 text-sm text-slate-700">SANTARÉM</td>
                <td className="py-2 px-4 text-sm text-slate-700">APROVADO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

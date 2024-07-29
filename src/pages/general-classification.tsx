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
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Classificação
        </h2>

        <div className="flex justify-between items-center mb-2  ">
          <div className="flex items-center">
          </div>
          <div className="flex-1 py-10 items-center text-center">
            <span className="bg-pmpa-blue-700 text-white font-bold py-4 px-28 rounded">Gráfico de notas</span>
          </div>
        </div>
        <div className="bg-pmpa-blue-500 rounded-lg p-6">
          <div className="w-1/4">
            <Pie data={data} options={options} />
          </div>
        </div>
        <h3 className="text-black text-center font-bold mt-4">Classificação Geral: CAS - 2023</h3>
      </section>
    </div>
  );
}

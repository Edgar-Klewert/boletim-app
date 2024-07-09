import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export function LoginConfirmation() {
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
          Confirmação de login
        </h2>

        <div className="flex justify-between items-center mb-2  ">
          <div className="flex items-center">
          </div>
          <div className="flex-1 py-10 items-center text-center">
            <span className=" bg-pmpa-blue-500 text-white font-bold py-4 px-28 rounded">Gráfico de alunos</span>
          </div>
        </div>
        <div className=" bg-pmpa-blue-500 rounded-lg p-6">
        <h2 className='text-white'>POLO CFAP:</h2>
          <div className="w-1/4">
            <Pie data={data} options={options} />
          </div>
        </div>
      </section>
    </div>
  );
}

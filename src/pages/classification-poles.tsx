import { Link } from 'react-router-dom';

export function ClassificationPole() {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-2 py-2 md:py-6">
      <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
        Selecione o Polo
      </h2>
      <div className="w-full flex flex-col items-center justify-start bg-gray-100 pt-20">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/classification/classification-by-pole">
            <button className="w-64 h-16 bg-pmpa-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold">
              CFAP
            </button>
          </Link>
          <Link to="/classificacao/SANTAREM">
            <button className="w-64 h-16 bg-pmpa-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold">
              SANTARÉM
            </button>
          </Link>
          <Link to="/classificacao/BEM">
            <button className="w-64 h-16 bg-pmpa-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold">
              BELÉM
            </button>
          </Link>
          <Link to="/classificacao/CASTANHAL">
            <button className="w-64 h-16 bg-pmpa-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold">
              CASTANHAL
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

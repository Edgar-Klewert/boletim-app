import EnableHistory from '@/assets/enable-history-icon.png'
import InfoStudent from '@/assets/info-student-icon.png'
import Ementas from '@/assets/ementas-icon.png'
import { Link } from 'react-router-dom'

export function AcademicRecord() {
  return (
    <main className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Histórico Escolar
        </h2>

        <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-3 gap-y-8">
          <Link
            to={'#'}
            className="bg-pmpa-blue-700 relative flex h-52 w-full max-w-80 justify-end rounded px-6 py-4"
          >
            <img
              src={EnableHistory}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Ativar Histórico</span>
          </Link>
          <Link
            to={'#'}
            className="bg-pmpa-blue-700 relative flex h-52 w-full max-w-80 justify-end rounded px-6 py-4"
          >
            <img
              src={InfoStudent}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Informações do Aluno</span>
          </Link>
          <Link
            to={'#'}
            className="bg-pmpa-blue-700 relative flex h-52 w-full max-w-80 justify-end rounded px-6 py-4"
          >
            <img
              src={Ementas}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Ementas</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

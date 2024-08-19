import QTS from '@/assets/qts-icon.png'
import Info from '@/assets/info-icon.png'
import Reportcard from '@/assets/reportcard-icon.png'
import { Link } from 'react-router-dom'

export function StudentPage() {
    return (
        <section className="mx-auto w-full max-w-[90rem] px-2 py-10 md:py-6">
          <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
            Opções curso
          </h2>
    
          <div className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
            <Link
              to={'#'}
              className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
            >
              <img
                src={QTS}
                className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
                alt=""
              />
              <span className="font-medium text-white">KTS</span>
            </Link>
            <Link
              to={'/student-page/course-information'}
              className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
            >
              <img
                src={Info}
                className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
                alt=""
              />
              <span className="font-medium text-white">Informações do Curso</span>
            </Link>
            <Link
              to={'#'}
              className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
            >
              <img
                src={Reportcard}
                className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
                alt=""
              />
              <span className="font-medium text-white">Boletim</span>
            </Link>
          </div>
        </section>
      )
}

import LoginConfirmation from '@/assets/login-confirmation-icon.png'
import InfoStudent from '@/assets/info-student-icon.png'
import Ementas from '@/assets/ementas-icon.png'
import { Link } from 'react-router-dom'

export function DataManagement() {
  return (
    <main className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Gerenciamento de dados
        </h2>

        <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-3 gap-y-8">
          <Link
            to={'#'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-default-blue px-6 py-4"
          >
            <img
              src={LoginConfirmation}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Confirmação de Login</span>
          </Link>
          <Link
            to={'#'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-default-blue px-6 py-4"
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
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-default-blue px-6 py-4"
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

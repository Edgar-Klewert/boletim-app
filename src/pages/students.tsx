import PlusIcon from '@/assets/add-plus-icon.png'
import AddLotIcon from '@/assets/add-lot-icon.png'
import UpdateIcon from '@/assets/update-icon.png'
import ActiveIcon from '@/assets/active-icon.png'
import RemoveIcon from '@/assets/remove-icon.png'
import { Link } from 'react-router-dom'

export function Students() {
  return (
    <main className="w-full py-6">
      <section className="mx-auto w-full max-w-[90rem]">
        <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
          Alunos
        </h2>

        <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-3 gap-y-8">
          <Link
            to={'/students/add'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
          >
            <img
              src={PlusIcon}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Adicionar Aluno</span>
          </Link>
          <Link
            to={'#'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
          >
            <img
              src={AddLotIcon}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Alunos em Lote</span>
          </Link>
          <Link
            to={'/students/update'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
          >
            <img
              src={UpdateIcon}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Atualizar Alunos</span>
          </Link>
          <Link
            to={'#'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
          >
            <img
              src={ActiveIcon}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Ativar Alunos</span>
          </Link>
          <Link
            to={'#'}
            className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
          >
            <img
              src={RemoveIcon}
              className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
              alt=""
            />
            <span className="font-medium text-white">Desativar Alunos</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

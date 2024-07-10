import PlusIcon from '@/assets/add-plus-icon.png'
import UpdateIcon from '@/assets/update-icon.png'
import RemoveIcon from '@/assets/remove-icon.png'
import { Link } from 'react-router-dom'

export function Disciplines() {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-2 py-10 md:py-6">
      <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
        Disciplinas
      </h2>

      <div className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
        <Link
          to={'/disciplines/add'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={PlusIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Adicionar disciplina</span>
        </Link>
        <Link
          to={'#'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={UpdateIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Atualizar disciplina</span>
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
          <span className="font-medium text-white">Remover disciplina</span>
        </Link>
      </div>
    </section>
  )
}

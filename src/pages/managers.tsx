import PlusIcon from '@/assets/add-plus-icon.png'
import UpdateIcon from '@/assets/update-icon.png'
import ActiveIcon from '@/assets/active-icon.png'
import RemoveIcon from '@/assets/remove-icon.png'
import BinIcon from '@/assets/bin-icon.png'
import { Link } from 'react-router-dom'

export function Managers() {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-2 py-10 md:py-6">
      <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
        Gestores
      </h2>

      <div className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
        <Link
          to={'/managers/add'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={PlusIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Adicionar Gestor</span>
        </Link>
        <Link
          to={'/managers/update'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={UpdateIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Atualizar Gestor</span>
        </Link>
        <Link
          to={'/managers/courses-search-active'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={ActiveIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Ativar Gestor</span>
        </Link>
        <Link
          to={'/managers/courses-search-disable'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={RemoveIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Desativar Gestor</span>
        </Link>
        <Link
          to={'#'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={BinIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Excluir Gestor</span>
        </Link>
      </div>
    </section>
  )
}

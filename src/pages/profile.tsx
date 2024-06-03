export function Profile() {
  return (
    <div className=" flex w-full flex-col items-center">
      <div className="relative h-24 w-24 rounded-full bg-gray-400">
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200"></div>
      </div>
      <button className="mt-4 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
        ALTERAR FOTO
      </button>
      <div className="mt-8 space-y-4">
        <p className="font-bold">Nome: RODINELSON DE LIMA SANCHES</p>
        <p>Email: rodinelsonsanches@gmail.com</p>
        <p>Curso/Polo: CFP - 2022 / CFAP</p>
        <p>Nascimento: Invalid da</p>
        <p>CPF: 90052480259</p>
      </div>
    </div>
  )
}

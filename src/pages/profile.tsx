import { Camera, Pencil } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

export function Profile() {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  function handleOnFileSelected(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target

    if (!files) {
      return null
    }

    const fileURL = URL.createObjectURL(files[0])
    setProfileImage(fileURL)
  }

  return (
    <div className="flex w-full items-center justify-center gap-10">
      <article className="bg-pmpa-blue-500 flex w-full max-w-4xl gap-8 rounded px-8 py-4">
        <div className="space-y-1 text-white">
          <div className="bg-pmpa-blue-800 group  relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-3xl">
            <label
              htmlFor="file"
              className="absolute inset-0 flex w-full cursor-pointer items-center justify-center opacity-0 group-hover:bg-black/20 group-hover:opacity-100"
            >
              <Camera className="h-6 w-6" />
              <input
                type="file"
                onChange={handleOnFileSelected}
                className="hidden"
                id="file"
                accept="image/jpeg,image/png"
              />
            </label>
            {profileImage && (
              <img
                src={profileImage}
                alt=""
                className="h-full w-full rounded-3xl object-cover"
              />
            )}
            {!profileImage && <span className="text-7xl font-medium">RS</span>}
          </div>
          <p className="text-center text-lg font-medium">Desenvolvedor</p>
        </div>

        <div className="flex h-80 flex-col justify-between">
          <div className="space-y-4 text-white">
            <div className="flex flex-col gap-1">
              <button className="ml-auto">
                <Pencil size={25} />
              </button>
              <span className="text-4xl font-bold">
                RODINELSON DE LIMA SANCHES
              </span>
            </div>
            <ul className="h-32 space-y-2 overflow-auto ">
              <li>Email: rodinelsonsanches@gmail.com</li>
              <li>CPF: 900.524.802-59</li>
              <li>Data de nascimento: 01/05/2022</li>
            </ul>
          </div>

          <div className="flex w-full justify-around gap-2">
            <div className="space-y-1 text-white">
              <span className="text-lg font-medium">Cursos:</span>
              <ul className="ml-4">
                <li>CFP - 2022</li>
                <li>CFP - 2024</li>
              </ul>
            </div>

            <div className="space-y-1 text-white">
              <span className="text-lg font-medium">Polos:</span>
              <ul className="ml-4">
                <li>CFAP</li>
                <li>MARABÁ</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

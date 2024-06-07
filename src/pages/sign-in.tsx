import { Eye, EyeOff } from 'lucide-react'
import PMPALogo from '@/assets/pmpa.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [viewPassword, setViewPassword] = useState<boolean>(false)

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-3xl space-y-4 rounded bg-pmpa-blue-700 py-24">
        <img
          src={PMPALogo}
          className="mx-auto h-24 w-20"
          alt="Logo da polícia militar do Pará"
        />
        <form className="w-full space-y-4 text-white">
          <div className="mx-auto flex w-full max-w-xl flex-col space-y-1">
            <label className="text-sm" htmlFor="CPF">
              CPF:
            </label>
            <input
              type="text"
              id="CPF"
              className="rounded px-4 py-2 text-black placeholder:text-sm"
              placeholder="Digite seu CPF"
            />
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-col space-y-1">
            <label className="text-sm" htmlFor="password">
              Senha:
            </label>
            <div className="flex w-full rounded bg-white">
              <input
                type={viewPassword ? 'text' : 'password'}
                id="password"
                className="flex-1 rounded bg-transparent px-4 py-2 text-black placeholder:text-sm"
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                className="px-2"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? (
                  <EyeOff size={20} className="text-pmpa-blue-700" />
                ) : (
                  <Eye size={20} className="text-pmpa-blue-700" />
                )}
              </button>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-xl justify-between">
            <Link to={'#'}>Esqueceu a senha?</Link>
            <button className="rounded px-4 py-1 font-bold transition-colors hover:bg-white hover:text-black">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

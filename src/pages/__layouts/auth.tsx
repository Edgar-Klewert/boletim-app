import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

export function AuthLayout() {
  return (
    <div className="min-h-screen">
      <Header isLogged={false} />
      <div className="h-[55rem] w-full bg-slate-100">
        <Outlet />
      </div>
    </div>
  )
}

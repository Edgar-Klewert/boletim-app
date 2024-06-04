import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Menu } from '@/components/menu'
import { Role } from '@/utils/enum-role-type'

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header isLogged />
      <div className="flex h-[55rem] w-full bg-slate-100">
        <Menu role={Role.DEV} />
        <Outlet />
      </div>
    </div>
  )
}

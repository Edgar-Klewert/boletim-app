import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Menu } from '@/components/menu'
import { Role } from '@/utils/enum-role-type'

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header isLogged />
      <div className="relative flex h-[48.5rem] w-full bg-slate-100 md:h-[55rem]">
        <Menu role={Role.DEV} />
        <div className='overflow-y-auto w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

import { LucideCircleUser, LucideList, LucideX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StudentMenu } from './menu-navigation/student-menu'
import { DevMenu } from './menu-navigation/dev-menu'
import { AdminMenu } from './menu-navigation/admin-menu'
import { ManagerMenu } from './menu-navigation/manager-menu'
import { Role } from '@/utils/enum-role-type'
import { useState } from 'react'

interface MenuProps {
  role: Role
}

export function Menu({ role }: MenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <aside className="hidden w-full max-w-60 space-y-8 bg-pmpa-blue-700 px-4 py-8 text-white md:block">
        <nav>
          {role === Role.DEV && <DevMenu />}
          {role === Role.ADMIN && <AdminMenu />}
          {role === Role.MANAGER && <ManagerMenu />}
          {role === Role.STUDENT && <StudentMenu />}
        </nav>
        <div className="border-y-2 py-4">
          <Link to={'/profile'} className="flex gap-4 text-sm tracking-wider">
            <LucideCircleUser size={20} />
            Perfil
          </Link>
        </div>
      </aside>

      <button
        className="absolute left-2 top-2 md:hidden"
        onClick={() => setIsOpenMenu(true)}
      >
        <LucideList size={25} />
      </button>

      {isOpenMenu && (
        <aside className="fixed inset-0 z-50 w-full space-y-8 bg-pmpa-blue-700 px-4 py-8 text-white md:static md:hidden md:max-w-60">
          <button
            className="absolute right-6 top-4"
            onClick={() => setIsOpenMenu(false)}
          >
            <LucideX size={20} />
          </button>

          <nav className="flex items-start justify-center md:block">
            {role === Role.DEV && <DevMenu />}
            {role === Role.ADMIN && <AdminMenu />}
            {role === Role.MANAGER && <ManagerMenu />}
            {role === Role.STUDENT && <StudentMenu />}
          </nav>
          <div className="flex items-start border-y-2 py-4 md:block">
            <Link
              to={'/profile'}
              className="flex items-start  gap-4 text-lg tracking-wider md:text-sm"
            >
              <LucideCircleUser size={20} />
              Perfil
            </Link>
          </div>
        </aside>
      )}
    </>
  )
}

import { LucideCircleUser } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StudentMenu } from './menu-navigation/student-menu'
import { DevMenu } from './menu-navigation/dev-menu'
import { AdminMenu } from './menu-navigation/admin-menu'
import { ManagerMenu } from './menu-navigation/manager-menu'
import { Role } from '@/utils/enum-role-type'

interface MenuProps {
  role: Role
}

export function Menu({ role }: MenuProps) {
  return (
    <aside className="bg-pmpa-blue-700 w-full max-w-60 space-y-8 px-4 py-8 text-white">
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
  )
}

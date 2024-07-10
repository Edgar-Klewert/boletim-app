import CoursesIcon from '@/assets/my-course-icon.png'
import DisciplinesIcon from '@/assets/disciplines-icon.png'
import { Link } from 'react-router-dom'

export function CourseManagement () {
  return (
    <section className="mx-auto w-full max-w-[90rem] px-2 py-10 md:py-6">
      <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
        Gerenciamento de curso
      </h2>

      <div className="mx-auto my-6 grid w-full max-w-7xl grid-cols-1 justify-items-center gap-4 py-2 md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
        <Link
          to={'/courses/all'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={CoursesIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white">Todos os cursos</span>
        </Link>
        <Link
          to={'/courses/management/disciplines'}
          className="relative flex h-52 w-full max-w-80 justify-end rounded bg-pmpa-blue-700 px-6 py-4"
        >
          <img
            src={DisciplinesIcon}
            className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
            alt=""
          />
          <span className="font-medium text-white"> Disciplinas</span>
        </Link>
      </div>
    </section>
  )
}

import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { AppLayout } from './pages/__layouts/app'
import { AuthLayout } from './pages/__layouts/auth'
import { SignIn } from './pages/sign-in'
import { Notes } from './pages/notes'
import { Behaviors } from './pages/behaviors'
import { Students } from './pages/students'
import { Admins } from './pages/admins'
import { Managers } from './pages/managers'
import { DataManagement } from './pages/data-management'
import { AcademicRecord } from './pages/academic-record'
import { Profile } from './pages/profile'
import { NotFound } from './pages/__errors/404'
import { Courses } from './pages/courses'
import { AddStudents } from './pages/add-students'
import { AddManagers } from './pages/add-managers'
import { AddAdmins } from './pages/add-admins'
import { UpdateStudents } from './pages/update-students'
import { UpdateManagers } from './pages/update-managers'
import { UpdateAdmins } from './pages/update-admins'
import { UpdateCourses } from './pages/update-courses'
import { DeleteCourses } from './pages/delete-courses'
import { Reports } from './pages/reports'
import { AddCourses } from './pages/add-courses'
import {Classification} from './pages/classification'
import { AddStudentsBatch } from './pages/add-student-batch'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/behaviors',
        element: <Behaviors />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/management',
        element: <DataManagement />,
      },
      {
        path: '/academic-record',
        element: <AcademicRecord />,
      },
      {
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/managers',
        element: <Managers />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/classification',
        element: <Classification />,
      },
      {
        path: '/students/add',
        element: <AddStudents />,
      },
      {
        path: '/students/batch',
        element: <AddStudentsBatch />,
      },
      {
        path: '/students/update',
        element: <UpdateStudents />,
      },
      {
        path: '/managers/add',
        element: <AddManagers />,
      },
      {
        path: '/managers/update',
        element: <UpdateManagers />,
      },
      {
        path: '/admins/add',
        element: <AddAdmins />,
      },
      {
        path: '/admins/update',
        element: <UpdateAdmins />,
      },
      {
        path: '/courses/add',
        element: <AddCourses />,
      },
      {
        path: '/courses/update',
        element: <UpdateCourses />,
      },
      {
        path: '/courses/delete',
        element: <DeleteCourses />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

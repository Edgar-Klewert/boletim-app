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
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/managers',
        element: <Managers />,
      },
      {
        path: '/students',
        element: <Students />,
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
])

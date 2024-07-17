import { createBrowserRouter } from 'react-router-dom'
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
import { UpdateManagers } from './pages/update-managers'
import { UpdateAdmins } from './pages/update-admins'
import { UpdateCourses } from './pages/update-courses'
import { DeleteCourses } from './pages/delete-courses'
import { Reports } from './pages/reports'
import { AddCourses } from './pages/add-courses'
import { Classification } from './pages/classification'
import { AddStudentsBatch } from './pages/add-student-batch'
import { AddNotesBatch } from './pages/add-notes-batch'
import { AddBehaviorsBatch } from './pages/add-behaviors-batch'
import { StudentsCoursesOptions } from './pages/students-courses-options'
import { SearchStudentsToUpdate } from './pages/search-students-to-update'
import { UpdateStudent } from './pages/update-students'
import { SearchDisableHistory } from './pages/search-disable-history'
import { SearchActiveHistory } from './pages/search-active-history'
import { SearchDownloadHistory } from './pages/search-download-history'
import { SearchStudentsToActive } from './pages/search-students-to-active'
import { SearchStudentsToDisable } from './pages/search-students-to-disable'
import { SearchAdminToActive } from './pages/search-admin-to-active'
import { SearchAdminToDisable } from './pages/search-admin-to-disable'
import { SearchManagersToDisable } from './pages/search-managers-to-disable'
import { SearchManagersToActive } from './pages/search-managers-to-active'
import { SearchNotesToUpdate } from './pages/search-notes-to-update'
import { SearchNotesToRemove } from './pages/search-notes-to-remove'
import { UpdateBehavior } from './pages/update-behavior'
import { OverallRating } from './pages/overall-rating'
import { Subjects } from './pages/subjects'
import { AddNotes } from './pages/add-notes'
import { AddBehaviors } from './pages/add-behaviors'
import { LoginConfirmation } from './pages/login-confirmation'
import { StudentInformation } from './pages/student-information'
import { StudentAcademicRecord } from './pages/student/student-academic-record'
import { CoursesAcademicRecord } from './pages/student/courses-academic-record'
import { CourseManagement } from './pages/course-management'
import { Disciplines } from './pages/disciplines'
import { AllCourses } from './pages/all-courses'
import { AddDiscipline } from './pages/add-discipline'
import { StudentHome } from './pages/student/student-home'
import { SearchNotes } from './pages/search-notes'
import { DevHome } from './pages/dev-home'
import { SearchCourseToDisableHistory } from './pages/ways/search-course-to-disable-history'
import { SearchCourseToDownloadHistory } from './pages/ways/search-course-to-download-history'
import { SearchCourseToAddBehaviors } from './pages/ways/search-course-to-add-behaviors'
import { SearchCourseToBatchBehaviors } from './pages/ways/search-course-to-batch-behaviors'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dev/home',
        element: <DevHome />,
      },
      {
        path: '/student/home',
        element: <StudentHome />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/subjects',
        element: <Subjects />,
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
        path: '/notes/add',
        element: <AddNotes />,
      },
      {
        path: '/behaviors/add',
        element: <AddBehaviors />,
      },
      {
        path: '/courses/management',
        element: <CourseManagement/>,
      },
      {
        path: '/courses/all',
        element: <AllCourses/>,
      },
      {
        path: '/courses/management/disciplines',
        element: <Disciplines/>,
      },
      {
        path: '/disciplines/add',
        element: <AddDiscipline/>,
      },
      {
        path: '/student/academic-record',
        element: <StudentAcademicRecord />,
      },
      {
        path: '/academic-record/courses-search-disable',
        element: <SearchCourseToDisableHistory />,
      },
      {
        path: '/academic-record/courses-search-download',
        element: <SearchCourseToDownloadHistory />,
      },
      {
        path: '/academic-record/courses-search-add-bahavior',
        element: <SearchCourseToAddBehaviors />,
      },
      {
        path: '/academic-record/courses-search-batch-bahavior',
        element: <SearchCourseToBatchBehaviors />,
      },
      {
        path: '/student/academic-record/courses',
        element: <CoursesAcademicRecord />,
      },
      {
        path: '/management/login-confirmation',
        element: <LoginConfirmation />,
      },
      {
        path: '/management/student-info',
        element: <StudentInformation />,
      },
      {
        path: '/students-courses-option',
        element: <StudentsCoursesOptions />,
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
        path: '/classification',
        element: <Classification />,
      },
      {
        path: '/students/add',
        element: <AddStudents />,
      },
      {
        path: '/classification/overall',
        element: <OverallRating />,
      },
      {
        path: '/behavior/update',
        element: <UpdateBehavior />,
      },
      {
        path: '/students/batch',
        element: <AddStudentsBatch />,
      },
      {
        path: '/students/search/update',
        element: <SearchStudentsToUpdate />,
      },
      {
        path: '/students/search/active',
        element: <SearchStudentsToActive />,
      },
      {
        path: '/students/search/disable',
        element: <SearchStudentsToDisable />,
      },
      {
        path: '/admin/search/active',
        element: <SearchAdminToActive />,
      },
      {
        path: '/admin/search/disable',
        element: <SearchAdminToDisable />,
      },
      {
        path: '/managers/search/active',
        element: <SearchManagersToActive />,
      },
      {
        path: '/managers/search/disable',
        element: <SearchManagersToDisable />,
      },
      {
        path: '/academic-record/active-search',
        element: <SearchActiveHistory/>,
      },
      {
        path: '/academic-record/disable-search',
        element: <SearchDisableHistory/>,
      },
      {
        path: '/academic-record/download-search',
        element: <SearchDownloadHistory/>,
      },
      {
        path: '/notes/search/',
        element: <SearchNotes />,
      },
      {
        path: '/notes/search/update',
        element: <SearchNotesToUpdate />,
      },
      {
        path: '/notes/search/remove',
        element: <SearchNotesToRemove />,
      },
      {
        path: '/students/update/:id',
        element: <UpdateStudent />,
      },
      {
        path: '/managers/add',
        element: <AddManagers />,
      },
      {
        path: '/notes/batch',
        element: <AddNotesBatch />,
      },
      {
        path: '/behaviors/batch',
        element: <AddBehaviorsBatch />,
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

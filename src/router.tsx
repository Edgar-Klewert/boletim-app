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
import { SelectCourseToDisableHistory } from './pages/ways/select-course-to-disable-history'
import { SelectCourseToDownloadHistory } from './pages/ways/select-course-to-download-history'
import { SelectCourseToAddBehaviors } from './pages/ways/select-course-to-add-behaviors'
import { SelectCourseToBatchBehaviors } from './pages/ways/select-course-to-batch-behaviors'
import { SelectCourseToActiveHistory } from './pages/ways/select-course-to-active-history'
import { SelectCourseToActiveStudent } from './pages/ways/select-course-to-active-student'
import { SelectCourseToDisableStudent } from './pages/ways/select-course-to-disable-student'
import { SelectCourseToUpdateStudent } from './pages/ways/select-course-to-update-student'
import { SelectCourseToLoginManagement } from './pages/ways/select-course-to-login-management'
import { SelectCourseToActiveManager } from './pages/ways/select-course-to-active-manager'
import { SelectCourseToDisableManager } from './pages/ways/select-course-to-disable-manager'
import { SelectCourseToBatchNotes } from './pages/ways/select-course-to-batch-notes'
import { SelectCourseToRemoveNotes } from './pages/ways/select-course-to-remove-notes'
import { SelectCourseToAddNotes } from './pages/ways/select-course-to-add-notes'
import { SelectCourseToUpdateNotes } from './pages/ways/select-course-to-update-notes'
import { SelectCourseToNotes } from './pages/ways/select-course-to-notes'
import { SelectCourseToUpdateBehaviors } from './pages/ways/select-course-to-update-behaviors'
import { SelectCourseToRemoveBehaviors } from './pages/ways/select-course-to-remove-behaviors'
import { GeneralClassification } from './pages/general-classification'
import { SelectCourseToGeneralClassification } from './pages/ways/select-course-to-general-classification'
import { BehaviorRemove } from './pages/behavior-remove'
import { ClassificationPole } from './pages/classification-poles'
import { ClassificationByPole } from './pages/classification-by-pole'
import { AverageScoresForPoles } from './pages/average-scores-for-poles'
import { SelectCourseTheClassificationByPole } from './pages/ways/select-course-the-classification-by-pole'
import { StudentPage } from './pages/student/student-page'
import { ImportKtsFile } from './pages/import-kts-file'
import { ImportDocumentsFile } from './pages/import-documents-file'
import { CourseInformation } from './pages/student/course-information'

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
        path: '/import/kts',
        element: <ImportKtsFile />,
      },
      {
        path: '/import/documents',
        element: <ImportDocumentsFile />,
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
        path: '/student-page/course-information',
        element: <CourseInformation/>,
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
        path: '/students/courses-search-active',
        element: <SelectCourseToActiveStudent />,
      },
      {
        path: '/students/courses-search-disable',
        element: <SelectCourseToDisableStudent />,
      },
      {
        path: '/students/courses-search-update',
        element: <SelectCourseToUpdateStudent/>,
      },
      {
        path: '/managers/courses-search-active',
        element: <SelectCourseToActiveManager />,
      },
      {
        path: '/managers/courses-search-disable',
        element: <SelectCourseToDisableManager />,
      },
      {
        path: '/academic-record/courses-search-active',
        element: <SelectCourseToActiveHistory />,
      },
      {
        path: '/academic-record/courses-search-disable',
        element: <SelectCourseToDisableHistory />,
      },
      {
        path: '/academic-record/courses-search-download',
        element: <SelectCourseToDownloadHistory />,
      },
      {
        path: '/classification/the-classification-by-pole ',
        element: <SelectCourseTheClassificationByPole />,
      },
      {
        path: '/notes/courses-search-batch',
        element: <SelectCourseToBatchNotes />,
      },
      {
        path: '/notes/courses-search-add',
        element: <SelectCourseToAddNotes />,
      },
      {
        path: '/notes/courses-search-update',
        element: <SelectCourseToUpdateNotes />,
      },
      {
        path: '/notes/search-course-notes',
        element: <SelectCourseToNotes />,
      },
      {
        path: '/notes/courses-search-remove',
        element: <SelectCourseToRemoveNotes />,
      },
      {
        path: '/behaviors/courses-search-add-bahavior',
        element: <SelectCourseToAddBehaviors />,
      },
      {
        path: '/classification/courses-search-general-classification',
        element: <SelectCourseToGeneralClassification />, 
      },
      {
        path: '/behaviors/courses-search-batch-bahavior',
        element: <SelectCourseToBatchBehaviors />,
      },
      {
        path: '/behaviors/courses-search-update-bahavior',
        element: <SelectCourseToUpdateBehaviors />,
      },
      {
        path: '/behaviors/courses-search-remove-bahavior',
        element: <SelectCourseToRemoveBehaviors />,
      },
      {
        path: '/academic-record/courses-search-login-management',
        element: <SelectCourseToLoginManagement />,
      },
      {
        path: '/classification/classification-poles',
        element: <ClassificationPole />,
      },
      {
        path: '/classification/classification-by-pole',
        element: <ClassificationByPole />,
      },
      {
        path: '/classification/average-scores-for-poles',
        element: <AverageScoresForPoles />,
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
        path: '/behaviors/behaviors-remove',
        element: <BehaviorRemove />,
      },
      {
        path: '/management/student-info',
        element: <StudentInformation />,
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
        path: '/students/page',
        element: <StudentPage />,
      },
      {
        path: '/students/add',
        element: <AddStudents />,
      },
      {
        path: '/classification/general-classification',
        element: <GeneralClassification />,
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

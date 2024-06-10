import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 p-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-md text-center">
        <h2 className="mb-8 text-9xl font-extrabold dark:text-gray-400">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          Desculpe, não conseguimos encontrar esta página.
        </p>
        <p className="mb-8 mt-4 dark:text-gray-400">
          Mas não se preocupe, você pode encontrar muitas outras coisas em nossa
          página inicial.
        </p>
        <Link
          rel="noopener noreferrer"
          to={'/'}
          className="rounded bg-pmpa-blue-700 px-8 py-3 font-semibold text-gray-50 dark:bg-pmpa-blue-700 dark:text-gray-50"
        >
          Voltar à página inicial
        </Link>
      </div>
    </section>
  )
}

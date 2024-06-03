export function NotFound() {
  return (
    <section className="flex h-full items-center bg-gray-50 p-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Desculpe, não conseguimos encontrar esta página.
          </p>
          <p className="mb-8 mt-4 dark:text-gray-400">
            Mas não se preocupe, você pode encontrar muitas outras coisas em
            nosso pagina inicial.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="rounded bg-pmpa-default-blue px-8 py-3 font-semibold text-gray-50 dark:bg-pmpa-default-blue dark:text-gray-50"
          >
            Voltar à página inicial
          </a>
        </div>
      </div>
    </section>
  )
}

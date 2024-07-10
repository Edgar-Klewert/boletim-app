
export function StudentHome() {
    return (
      <div className="w-full py-6">
          <section className="mx-auto w-full max-w-[90rem]">
              <h2 className="w-full border-b-2 border-b-black text-xl font-semibold ">
                  Meus cursos
              </h2>
  
              <div className="mx-auto my-8 grid w-full max-w-6xl grid-cols-3">
            <div className="flex flex-col items-center space-y-2 px-2">
              <div className="h-60 w-full max-w-72 bg-gray-400"></div>
              <span className="font-medium">CFP - 2022</span>
            </div>
            <div className="flex flex-col items-center space-y-2 px-2">
              <div className="h-60 w-full max-w-72 bg-gray-400"></div>
              <span className="font-medium">CAS - 2023</span>
            </div>
            <div className="flex flex-col items-center space-y-2 px-2">
              <div className="h-60 w-full max-w-72 bg-gray-400"></div>
              <span className="font-medium">CFO - 2022</span>
            </div>
  
           </div>
          </section>
      </div>
    );
  }
  
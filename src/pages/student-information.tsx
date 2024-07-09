import CFO from '@/assets/cfo-img-curso.jpg'

const courses = [
    { id: 1, title: 'CAS - 2023' },
    { id: 2, title: 'CAS TURMA I - 2024' },
    { id: 3, title: 'CAS TURMA II - 2023' },
];

export function StudentInformation(){
    return(
        <div className="w-full py-6">
            <section className="mx-auto w-full max-w-[90rem]">
                <h2 className="w-full border-b-2 border-b-black text-xl font-semibold">
                    Informação de estudante
                </h2>

                <div className="flex flex-wrap justify-center">
                    {courses.map((course) =>(
                        <div key={course.id} className="bg-white shadow-md m-10 w-80 py-1">
                            <div className="flex flex-col items-center">
                                <img src={CFO} alt="Polícia Militar" className='mb-4' />
                                <h3 className='text-xl mb-2'>{course.title}</h3>
                                <button className='bg-pmpa-blue-500 text-white py-2 px-4 rounded'>Baixar</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center">
                    {courses.map((course) =>(
                        <div key={course.id} className="bg-white shadow-md m-10 w-80 py-1">
                            <div className="flex flex-col items-center">
                                <img src={CFO} alt="Polícia Militar" className='mb-4' />
                                <h3 className='text-xl mb-2'>{course.title}</h3>
                                <button className='bg-pmpa-blue-500 text-white py-2 px-4 rounded'>Baixar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
import { Link } from 'react-router-dom'
import CFOImage from '@/assets/cfo-img-curso.jpg'
import CGSImage from '@/assets/cgs-img-course.png'
import CASImage from '@/assets/cas-img-course.png'

const courses = [
    {id: 1, title: 'CFO - 2023', imageURL: CFOImage},
    {id: 2, title: 'CGS TURMA I - 2024', imageURL: CGSImage},
    {id: 3, title: 'CAS TURMA II -2023', imageURL: CASImage}
];

export function SelectCourseToActiveHistory(){
    return(
        <div className='w-full py-6'>
            <section className='mx-auto w-full max-w-[90rem]'>
                <h2 className='w-full border-b-2 border-black text-xl font-semibold'>
                    Selecione o curso
                </h2>

                <div className='flex flex-wrap justify-center'>
                    {courses.map((course) =>(
                        <div key={course.id} className='bg-white shadow-md m-10 w-80 py-1'>
                            <Link to={`/academic-record/active-search`} className='block'>
                                <div className='flex flex-col items-center'>
                                    <img src={course.imageURL} alt="Imagem do curso" className='mb-4' />
                                    <h3 className='text-xl  mb-2'>{course.title}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
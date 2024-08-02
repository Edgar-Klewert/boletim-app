import { Link } from 'react-router-dom'
import CFOImage from '@/assets/cfo-img-curso.jpg'
import CASImage from '@/assets/cas-img-course.png'
import CGSImage from '@/assets/cgs-img-course.png'

const courses = [
    { id: 1, title: 'CFO - 2023', imageURL: CFOImage },
    { id: 2, title: 'CAS TURMA I - 2024', imageURL: CASImage},
    { id: 3, title: 'CGS TURMA II - 2023', imageURL: CGSImage},
];

export function SearchCourseToClassificationPole(){
    return(
        <div className='w-full py-6'>
            <section className='mx-auto w-full max-w-[90rem]'>
                <h2 className='w-full border-b-2 border-b-black text-xl font font-semibold'>
                    Selecione um curso
                </h2>

                <div className='flex flex-wrap justify-center'></div>
            </section>
        </div>
    )
}
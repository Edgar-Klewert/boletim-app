import React, { useState } from 'react';
import CFOImage from '@/assets/cfo-img-curso.jpg';
import CASImage from '@/assets/cas-img-course.png';
import CGSImage from '@/assets/cgs-img-course.png';
import PDFViewer from '@/components/templates/subject-viewer'; 
import { PDFDownloadLink } from '@react-pdf/renderer';

const courses = [
    { id: 1, title: 'CFO - 2024', imageURL: CFOImage },
    { id: 2, title: 'CAS TURMA II - 2024', imageURL: CASImage },
    { id: 3, title: 'CGS TURMA II - 2024', imageURL: CGSImage },
];

export const CourseInformation: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
    const handleCourseClick = (courseId: number) => {
      console.log('Curso selecionado:', courseId);
      setSelectedCourse(courseId);
  };

    return (
        <div className='w-full py-6'>
            <section className='mx-auto w-full max-w-[90rem]'>
                <h2 className='w-full border-b-2 border-b-black text-xl font-semibold'>
                    Selecione o curso
                </h2>

                <div className='flex flex-wrap justify-center'>
                    {courses.map((course) => (
                        <div key={course.id} className='bg-white shadow-md m-10 w-80 py-1'>
                            <div className='flex flex-col items-center'>
                                <img src={course.imageURL} alt="Imagem do curso" className='mb-4' />
                                <h3 className='text-xl mb-2'>{course.title}</h3>
                                <button className='px-6 py-2 bg-pmpa-blue-500 text-white' onClick={() => handleCourseClick(course.id)}>
                                  <PDFDownloadLink document={<PDFViewer title={course.title} />} fileName='some.pdf'>
                                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Baixar')}
                                  </PDFDownloadLink>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
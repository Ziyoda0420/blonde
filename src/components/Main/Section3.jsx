import React from 'react'
import Git from '../../assets/Git.svg';
import City from '../../assets/City.svg';
const Section3 = () => {
  return (
    <div>
      <h2 className='text-blue-900 text-[30px] justify-center flex mt-[150px] font-bold'>Our   <span className='text-amber-300'> Features</span></h2>
      <p className='text-[20px] text-gray-700 flex justify-center mt-[10px]'>This very extraordinary feature, can make learning activities more efficient</p>
      <div className='flex gap-40 ml-[50px] justify-center mt-[50px]'>
        <div className='mt-[200px]'>
          <p className='text-blue-950 text-[35px] font-bold' > <span className='text-amber-300 '>Tools</span> For Teachers <br /> And Learners</p>
          <p className='text-gray-600 mt-[10px] text-[18px]'>Class has a dynamic set of teaching tools built to <br /> be deployed and used during class.
Teachers can <br /> handout assignments in real-time for students to <br /> complete and submit.</p>
        </div>
        <div>
          <img className='w-[550px] h-[550px]' src={Git} alt="" />
        </div>
      </div>
           <div className='flex gap-40 ml-[50px] justify-center mt-[150px]'>
             <div>
          <img className='w-[550px] h-[550px]' src={City} alt="" />
        </div>
        <div className='mt-[150px]'>
          <p className='text-blue-950 text-[35px] font-bold' > Assessments,<br /> <span className='text-amber-300'>Quizzes</span>, Tests</p>
          <p className='text-gray-600 mt-[10px] text-[18px]'>Easily launch live assignments, quizzes, and <br /> tests.
Student results are automatically entered in <br /> the online gradebook.
</p>
        </div>
       
      </div>
    </div>
  )
}

export default Section3
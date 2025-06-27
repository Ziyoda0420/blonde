import React from 'react'
import Par from '../../assets/Part1.svg';
import Part from '../../assets/Part2.svg';

const Section4 = () => {
  return (
    <div>
      
      <div className='flex gap-40 ml-[50px] justify-center mt-[50px]'>
        <div className='mt-[200px]'>
          <p className='text-blue-950 text-[35px] font-bold' > <span className='text-amber-300 '>Class Managament</span> <br /> Tools For Educators</p>
          <p className='text-gray-600 mt-[10px] text-[18px]'>Class provides tools to help run and manage the class <br /> such as Class Roster, Attendance, and more. With the <br /> Gradebook, teachers can review and grade tests and <br /> quizzes in real-time.
</p>
        </div>
        <div>
          <img className='w-[550px] h-[550px]' src={Par} alt="" />
        </div>
      </div>
           <div className='flex gap-40 ml-[50px] justify-center mt-[50px]'>
             <div>
          <img className='w-[550px] h-[550px]' src={Part} alt="" />
        </div>
        <div className='mt-[150px]'>
          <p className='text-blue-950 text-[35px] font-bold' > One-on-One <br /> <span className='text-amber-300'>Discussions</span> </p>
          <p className='text-gray-600 mt-[10px] text-[18px]'>Teachers and teacher assistants can talk with <br /> students privately without leaving the Zoom  <br />environment.

</p>
        </div>
       
      </div>
    </div>
  )
}

export default Section4
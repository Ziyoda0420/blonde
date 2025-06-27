import React from 'react';
import Picture from '../../assets/Picture1.svg';
import Girl from '../../assets/Picture2.svg';

const Section1 = () => {
  return (
    <div>
      <p className='flex justify-center text-[35px] text-blue-950 mt-[250px] font-medium'>
        What is <span className='text-orange-400'> Skilline?</span>
      </p>
      <p className='text-center mt-[30px] flex justify-center text-gray-600 text-[18px]'>
Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.
      </p>
      <div className='flex justify-center mt-[50px] gap-24'>
        <div>
        <img src={Picture} alt="picture" />
        <p className='text-white text-[30px] font-medium mt-[-250px] ml-[180px]'>FOR INSTRUCTORS</p>
        <button className='w-[200px] h-[80px] rounded-3xl border-emerald-100 border-2 text-white hover:bg-blue-400 hover:border-blue-400 ml-[200px] mt-[30px]' >Start a class today</button>
        </div>
        <div>
           <img src={Girl} alt="picture" />
             <p className='text-white text-[30px] font-medium mt-[-250px] ml-[180px]'>FOR STUDENTS</p>
        <button className='w-[200px] h-[80px] rounded-3xl border-emerald-100 border-2 text-white hover:bg-blue-400 hover:border-blue-400 ml-[200px] mt-[30px]' >Start a class today</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;

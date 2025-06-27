import React from 'react';
import Group from '../assets/Skill.svg';
import Circle1 from '../assets/Circle 1.svg';
import Circle2 from '../assets/Circle 2.svg';
import Girl from '../assets/Girl.svg';
import Company from '../assets/Company.svg'

const Header = () => {
  return (
    <div>
      <div className='h-[800px] rounded-t-none rounded-b-[250px] bg-pink-100'>
      <nav className="flex justify-between mr-9 ml-9 items-center h-[100px]">
        <img className="ml-[60px]" src={Group} alt="img" />
        <ul className="flex gap-9 ml-[300px]">
          <li><a href="#">Home</a></li>
          <li><a href="#">Careears</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className='flex gap-24 mr-[100px]'>
        <button  className='w-[100px] h-[40px] rounded-2xl hover:bg-amber-400 bg-amber-50'>Login</button>
        <button  className='w-[100px] h-[40px] rounded-2xl hover:bg-amber-400 bg-amber-50'>Sign Up</button>
        </div>
      </nav>
      <div className='flex gap-20 mt-[100px] ml-[140px]'>
        <div>
          <p className='text-[40px] text-blue-950 font-bold'> <span className='text-amber-400'>Studying </span>Online is <br /> now much easier</p>
          <p className='text-gray-700  mt-[40px] text-[17px]'>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
          <button className='w-[120px] h-[50px] rounded-4xl bg-amber-400 text-white mt-[50px]'>Join free</button>
          <img className='mt-[-75px] ml-[150px] w-[120px] h-[120px]' src={Circle1} alt="img" />
          <img className='w-[20px] h-[20px] mt-[-80px] ml-[200px]'  src={Circle2} alt="img" />
          <p className='text-[20px] ml-[270px] mt-[-30px]'>Watch how it works</p>
        </div>
        <div>
          <img className='mt-[-100px] w-[700px] h-[700px]'   src={Girl} alt="img" />
          <p className='w-[150px] h-[120px] bg-amber-300 ml-[700px] mt-[-300px]'></p>
        </div>

     
    </div>
    <div className='mt-[250px] ml-[300px]'>
        <img className=' w-[900px]' src={Company} alt="" />
     </div>
    </div>
    </div>
  );
};

export default Header;

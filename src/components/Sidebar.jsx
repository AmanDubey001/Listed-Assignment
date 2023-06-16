import Image from 'next/image';
import React from 'react'

const Sidebar = () => {
    const navLinks = [
        {
          id: 1,
          name: "Dashboard",
          icon: "/images/dashboard-icon.svg",
        },
        {
          id: 2,
          name: "Transactions",
          icon: "/images/transaction-icon.svg",
        },
        {
          id: 3,
          name: "Schedules",
          icon: "/images/schedule-icon.svg",
        },
        {
          id: 4,
          name: "Users",
          icon: "/images/user-icon.svg",
        },
        {
          id: 5,
          name: "Settings",
          icon: "/images/setting-icon.svg",
        },
      ];
  return (
    <div className='hidden md:block w-[18%] h-[90vh] mx-4 bg-black p-4 rounded-2xl fixed  xl:p-12'>
      <h1 className='text-3xl text-white font-[700] tracking-wider xl:text-4xl'>Board.</h1> 

      <div className='my-4 h-full flex flex-col justify-between'>
     <ul className='text-white'>
        { navLinks.map((item) => {
            const Icon = item.icon;
            return (<button className='text-white text-lg flex gap-4 font-[400] items-center my-4' key={item.id}><Image src={Icon} alt={`${Icon}-icon`}  width={20} height={20}/> {item.name} </button>)

        })}
        </ul>
        <div className='flex flex-col mb-12  items-start'>
        <button className='text-white fonr-[400] text-lg my-4'>Help </button>
        <button className='text-white font-[400] text-lg'>Contact Us </button>
        </div> 
      </div>
    </div>
  )
}

export default Sidebar

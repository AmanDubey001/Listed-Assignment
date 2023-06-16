import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RiDashboard2Line } from "react-icons/ri";
import Image from 'next/image';


const Navbar = () => {
    const [open,setOpen] = useState(true);
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
    <div className="z-100 bg-black w-full px-6 absolute top-0 left-0 py-3 flex flex-col md:hidden" style={{zIndex:50}}>
      <div className='flex flex-row justify-between'>  
      <h1 className='text-3xl tracking-wider font-[700] text-white '>Board.</h1>
     {open && <button onClick={()=>setOpen(!open)} ><GiHamburgerMenu size="30px" color="white"/></button>}
     {!open && <button onClick={()=>setOpen(!open)} ><RxCross1 size="30px" color="white"/></button>}
     </div>
    {!open && <div className='my-4 '>
     <ul className='text-white'>
        { navLinks.map((item) => {
            const Icon = item.icon;
            return (<button className='text-white text-lg flex gap-4 font-[400] items-center my-4 ' key={item.id}><Image src={Icon} alt={`${Icon}-icon`}  width={20} height={20}/> {item.name} </button>)

        })}
        </ul>
        <div className='flex mt-8 flex-col items-start'>
        <button className='text-white fonr-[400] text-lg my-4'>Help </button>
        <button className='text-white font-[400] text-lg'>Contact Us </button>
        </div>   
     </div>  } 

    </div>
  )
}

export default Navbar

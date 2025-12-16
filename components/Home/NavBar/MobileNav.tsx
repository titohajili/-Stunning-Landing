import { NAVLINKS } from '@/constant/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
  shoNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({shoNav,closeNav}:Props) => {

  const  navOpenCloseStyle = shoNav ? 'translate-x-0' : '-translate-x-full'

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen ${navOpenCloseStyle}`}></div>
      {/* NavLinks */}
      <div className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-red-600 space-y-6 z-1050 ${navOpenCloseStyle}`}>
        {
          NAVLINKS.map((link)=>{
            return <Link href={link.url} key={link.id}>
              <p className='tetx-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
            </Link>
          })
        }

      {/* Close Button */}
      <CgClose onClick={closeNav} className='absolute top-[.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}

export default MobileNav

import Logo from '@/components/Helper/Logo'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-white border-t border-gray-200 mt-20 '>
      <div className='w-[80%] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
        {/* 1st colum */}
        <div className='space-y-4'>
            <Logo/>
            <p className='text-gray-500 text-sm leading-relaxed'>
              We're the digital agency to create your digital presence for better conversion and sales.
            </p>
        </div>
        {/* 2nd colum */}
        <div>
            <h3 className='text-gray-400 font-medium mb-6'>Company</h3>
            <ul className='space-y-4 text-sm text-gray-700'>
                <li className='hover:text-black cursor-pointer'>About Us</li>
                <li className='hover:text-black cursor-pointer'>Privacy Police</li>
                <li className='hover:text-black cursor-pointer'>Terms & Conditions</li>
                <li className='hover:text-black cursor-pointer'>FAQ</li>
                <li className='hover:text-black cursor-pointer'>Contact</li>
            </ul>
        </div>
        {/* 3rd colum */}
        <div>
            <h3 className='text-gray-400 font-medium mb-6'>Contact Details</h3>
            <ul className='space-y-5 text-sm text-gray-700'>
                <li className='flex items-start gap-3'>
                    <span className='text-pink-500 text-lg'>
                        📍
                    </span>
                    <span>
                        Amsterdam <br /> Netherlands
                    </span>
                </li>
                <li className='flex items-start gap-3'>
                    <span className='text-pink-500 text-lg'>
                        📞
                    </span>
                    <span>
                        <p>
                          +994-99-868-62
                        </p>
                        <p className='text-gray-400'>7 Days - 8am - 10pm</p>
                    </span>
                </li>
                 <li className='flex items-start gap-3'>
                    <span className='text-pink-500 text-lg'>
                        ✉️
                    </span>
                    <span>
                        maqatito963@gmail.com
                    </span>
                </li>
            </ul>
        </div>
        {/* 4th colum */}
        <div>
            <h3 className='text-gray-400 font-medium mb-6'>Follow us on social media</h3>
            <p className='text-gray-500 text-sm mb-6 '>Get the latest trends updates right at your inbox.</p>
            <div className='flex flex-wrap gap-2 text-sm text-gray-700 mb-6'>
                <span className='hover:text-black cursor-pointer'>Facebook</span>·
                <span className='hover:text-black cursor-pointer'>Twitter</span>·
                <span className='hover:text-black cursor-pointer'>Instagram</span>
            </div>
            {/* Payment image */} 
            <Image src={"/images/footer.png"} alt='Payment Methods' className='object-contain' width={200} height={200} />
        </div>
      </div>
      {/* Bottom bar */}
      <div className='border-t border-gray-200 py-6 text-center text-sm text-gray-500'>© 2025 Webdev warrios. All Rights Reserved</div>
    </div>
  )
}

export default Footer

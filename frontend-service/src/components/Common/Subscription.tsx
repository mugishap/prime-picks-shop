import React from 'react'
import { Plane, Subscribe1, Subscribe2, Subscribe3, Subscribe4 } from '../../assets'

interface Props {

}

const Subscription: React.FC<Props> = ({ }) => {
    return (
        <div className='w-full py-[70px] pb-[65px] flex bg-[#0989ff] relative items-center justify-center'>
            <div>
                <img className='absolute z-[1] opacity-[0.4] top-0 left-0 mix-blend-luminosity max-w-full' src={Subscribe1} alt="" />
                <img className='absolute z-[1] opacity-[0.4] top-[53%] left-[10%] mix-blend-luminosity' src={Subscribe2} alt="" />
                <img className='absolute z-[1] opacity-[0.4] bottom-[10%] left-[12%]' src={Subscribe3} alt="" />
                <img className='absolute z-[1] -top-[5%] right-[12%]' src={Subscribe4} alt="" />
                <div className='absolute z-[1] top-[24%] right-[17%] h-[110px] w-[399px]'>
                    <img src={Plane} className='absolute -top-[34%] -left-[6%]' alt="" />
                    <svg width="399" height="110" className="absolute top-0 left-0 d-none d-sm-block" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3"></path>
                    </svg>
                    <svg className="absolute top-0 left-0 sm:hidden" width="193" height="110" viewBox="0 0 193 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3"></path>
                    </svg>
                </div>
            </div>
            <div className='w-8/12 z-[2] flex items-center justify-around'>
                <div className='flex flex-col text-white justify-center'>
                    <span className='my-2'>SALE 20% OFF ALL STORE</span>
                    <span className='font-extrabold text-4xl text-white'>Subscribe to our Newsletter</span>
                </div>
                <div className='flex w-1/2 items-center justify-end'>
                    <div className='w-8/12 flex'>
                        <input type="text" className='w-10/12 outline-none border-none rounded-l-lg p-4' placeholder='Enter your email here' />
                        <button className='p-4 rounded-r-lg text-white cursor-pointer bg-[#010f1c]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
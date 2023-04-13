import React from 'react'
import { BiX } from 'react-icons/bi'

interface Props {
  setShowSidebar: Function
}

const Sidebar: React.FC<Props> = ({ setShowSidebar }) => {
  return (
    <div className='z-[2] w-full h-full absolute top-0 left-0 bg-black/20 backdrop-blur-md'>
      <div className='absolute z-[3] w-full h-full' onClick={() => setShowSidebar(false)}></div>
      <div className='z-[4] bg-white w-4/12 absolute right-0 top-0 p-4 h-full flex flex-col justify-between'>
        <div className="flex flex-col justify-start items-start h-[98%]">
          <BiX onClick={() => setShowSidebar(false)} className='' size={25} />
          {

          }
        </div>
        <span className='text-center'>Copyright &copy; {(new Date().getFullYear())}. Prime Picks</span>
      </div>
    </div>
  )
}

export default Sidebar
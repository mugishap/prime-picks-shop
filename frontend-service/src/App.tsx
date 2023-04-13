import React, { Suspense } from 'react'
import './App.css'
import Pages from './Pages'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import SwiperCore from 'swiper'
import { Logo } from './assets'

const App: React.FC = () => {

  SwiperCore.use([Autoplay]);

  return (
    <Suspense
      fallback={
        <div className='w-full bg-slate-200 h-screen flex justify-center items-center'>
          <div className='relative z-[2] h-44 w-44'>
            <div className='z-[3] animate-spin absolute w-full h-full rounded-full border-b-2 border-pink-600 p-10'>
            </div>
            <div className='z-[4] absolute w-full'>
              <img className='w-36' src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      }
    >
      <div className="">
        <ToastContainer
          theme='colored'
          position='top-right'
          hideProgressBar={true}
        />
        <Pages />
      </div>
    </Suspense>
  )
}

export default App

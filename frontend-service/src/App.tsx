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

const App: React.FC = () => {

  SwiperCore.use([Autoplay]);

  return (
    <Suspense
      fallback={
        <div className='w-full bg-black h-screen flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-nf-red'></div>
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

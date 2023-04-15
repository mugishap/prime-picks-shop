import React from 'react'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import { slides } from '../../constants'
import { ISlide } from '../../types'
import Subscription from '../Common/Subscription'
import TrendingProducts from '../Products/TrendingProducts'
import Features from './Features'
import SlideComponent from './Slides/SlideComponent'
import TopProducts from './TopProducts'

const HomeComponent: React.FC = () => {

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Swiper
                className='w-full'
                autoplay={{
                    delay: 2000
                }}
                modules={[Pagination, Autoplay]}
                pagination
            >
                {
                    slides.map((slide: ISlide, index: number) => (
                        <SwiperSlide className={`bg-blueish`} key={index}>
                            <SlideComponent slide={slide} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex flex-col px-[1vw] md:px-[5vw] xl:px-[10vw]'>
                <TopProducts />
                <Features />
                <TrendingProducts />
            </div>
            <Subscription />
        </div>
    )
}

export default HomeComponent
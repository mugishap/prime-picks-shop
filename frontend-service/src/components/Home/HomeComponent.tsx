import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { ISlide } from '../../types'
import { IPad, IWatch, Tablet } from '../../assets'
import SlideComponent from './Slides/SlideComponent'
import { delay } from '@reduxjs/toolkit/dist/utils'
import { Autoplay, Navigation, Pagination } from 'swiper'
import TopProducts from './TopProducts'
import Features from './Features'
import TrendingProducts from './TrendingProducts'
import Subscription from '../Common/Subscription'

const HomeComponent = () => {

    const slides: ISlide[] = [
        {
            headline: "The best note book collection 2023",
            image: Tablet,
            offer: "10%",
            starting: "$999.000",
            color: "#ffd43a",
            background: "greenish"
        },
        {
            headline: "The best Smart Watch collection 2023",
            image: IWatch,
            offer: "-10%",
            starting: "$274.000",
            color: "#fd4b6b",
            background: "whitish"
        },
        {
            headline: "The best tablet collection 2023",
            image: IPad,
            offer: "-35%",
            starting: "$274.000",
            color: "#ffd43a",
            background: "greenish"
        },
    ]

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
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <SlideComponent slide={slide} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex flex-col px-[10vw]'>
                <TopProducts />
                <Features />
                <TrendingProducts />
            </div>
            <Subscription />
        </div>
    )
}

export default HomeComponent
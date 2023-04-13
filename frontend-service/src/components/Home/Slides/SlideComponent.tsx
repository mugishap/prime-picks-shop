import React from 'react'
import { ISlide } from '../../../types'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Props {
    slide: ISlide
}

const SlideComponent: React.FC<Props> = ({ slide }) => {
    console.log(`bg-${slide.background}`);

    return (
        <div className={`w-full bg-${slide.background} bg- text-${slide.background === "greenish" ? "white" : "black"} h-[60vh] flex items-center justify-center`}>
            <div className="flex flex-col my-2 w-4/12 justify-center">
                <div className='flex'>
                    <span>Starting at</span> &nbsp;<span className='font-bold'>{slide.starting}</span>
                </div>
                <span className={`w-4/5 font-bold my-2 text-6xl`}>{slide.headline}</span>
                <div className='font-oregano text-[28px] my-2 flex'>
                    <span className='text-[28px] font-oregano'>Exclusive offer</span> &nbsp;
                    <section className='relative'>
                        <span className={`text-[28px] font-oregano text-[${slide.color}]`}>{slide.offer}</span>
                        <svg className='absolute -bottom-[21px] -left-[29px]' width="94" height="20" fontSize={28} color={slide.color} viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M74.8576 4.63367L78.6048 5.11367C80.9097 5.35155 82.8309 5.75148 84.4483 5.97993L86.6581 6.31091L88.4262 6.63948C89.4684 6.81761 90.2699 6.9312 90.8805 6.99186C93.3213 7.24888 92.7011 6.63674 92.8183 6.12534C92.9355 5.61394 93.7175 5.37081 91.3267 4.45886C90.73 4.24001 89.9345 3.97481 88.8826 3.65818L87.1034 3.12577L84.8643 2.63282C83.236 2.28025 81.2402 1.82307 78.8684 1.52138L75.0177 0.981633C73.6188 0.823014 72.1417 0.730003 70.5389 0.582533C63.0297 0.0282543 55.4847 0.193022 48.0068 1.07459C39.9065 2.04304 31.9328 3.87384 24.2213 6.53586C18.0824 8.61764 12.1674 11.3089 6.56479 14.5692C4.88189 15.5255 3.25403 16.5756 1.68892 17.7145C0.568976 18.5077 -0.00964231 18.9932 0.0547097 19.0858C0.388606 19.6584 10.6194 13.1924 25.151 8.99361C32.789 6.72748 40.6283 5.20536 48.5593 4.44848C55.8569 3.76455 63.1992 3.69678 70.5082 4.24591L74.8223 4.62335" fill="currentColor"></path>
                        </svg>
                    </section> &nbsp;
                    <span className='text-[28px] font-oregano'>off this week</span>
                </div>
                <Link to={"/products"}>
                    <button className='flex bg-white px-4 mt-8 py-2 cursor-pointer w-fit rounded text-black items-center'>
                        <span className='mr-3'>Shop Now</span>
                        <FiArrowRight />
                    </button>
                </Link>
            </div>
            <div className="flex items-center w-4/12 justify-end">
                <img className=' object-cover' src={slide.image} alt={slide.headline} />
            </div>
        </div>
    )
}

export default SlideComponent
import React from 'react'
import BannerImg from '../../assets/women/women3.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center 
        pt-14 py-12 sm:py-0 dark:bg-gray-950 dark:text-white duration-200'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2
                gap-6 items-center'>
                    {/* image sections */}
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt=''
                            className='max-w-[400px] h-[350px] w-full max-auto 
                        drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                        />
                    </div>
                    {/* details sections */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xp font-bold'
                        >Summer Sale upto 50% off</h1>
                        <p data-aos="fade-up" className='text-sm text-gray-500
                        tracking-wide leading-5'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Blanditiis tempore modi provident incidunt cupiditate eum praesentium qui fuga dolor,
                            reiciendis quo veritatis temporibus iusto quaerat error nam? Voluptatum, adipisci repellat.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <div data-aos="fade-up" className='flex items-center gap-4'
                            >
                                <GrSecure
                                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
                                dark:bg-violet-400'/>
                                <p>
                                    Quality Products
                                </p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 
                                rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 
                                rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Easy Payment Method</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 
                                rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
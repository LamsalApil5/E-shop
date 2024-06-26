import React from 'react'
import Slider from 'react-slick'
import Profile from '../../assets/man.png'

const testionialData = [
    {
        id: 1,
        name: "Shisir",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    },
    {
        id: 2,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    },
    {
        id: 3,
        name: "Hari",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    },
    {
        id: 4,
        name: "Ram",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    },
    {
        id: 5,
        name: "Dev Raj",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    },
    {
        id: 6,
        name: "Bishnu",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus inventore ipsa suscipit quibusdam amet",
        img: Profile
    }
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pouseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='pt-14 pb-14'>
            <div>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'
                    >What our customer are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque voluptates dignissimos
                        tenetur?
                    </p>
                </div>
                {/* Testimonials cards Section */}
                <div
                    data-aos="zoom-in">
                    <Slider {...settings}>
                        {testionialData.map((data) =>
                            <div className='my-6'>
                                <div
                                    key={data.id}
                                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt=""
                                            className='rounded-full w-20 h-20' />
                                    </div>
                                    <div>
                                        <div className='space-y-3'
                                        >
                                            <p className='text-x5 test-gray-500'
                                            >{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'
                                            >{data.name}</h1>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif
                                absolute top-0 right-0'>

                                </p>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
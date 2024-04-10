import React from 'react'
import img1 from "../../assets/women/women.png";
import img2 from "../../assets/women/women3.png";
import img3 from "../../assets/women/women4.png";

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque voluptates dignissimotenetur",
    }, {
        id: 2,
        img: img2,
        title: "T-shirt",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque voluptates dignissimotenetur",
    }, {
        id: 3,
        img: img3,
        title: "women western",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque voluptates dignissimotenetur",
    }

]

const TopProducts = () => {
    return (
        <div>
            <div className='container'>
                {/* Header section */}
                <div className='text-left mb-24'>
                    <p data-aos="fade-up" className='text-sm text-primary'
                    >Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque voluptates dignissimos
                        tenetur?
                    </p>
                </div>
                {/* Body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center gap=5'>
                    {
                        ProductsData.map((data) => (
                            <div
                                className='rounded-2xl bg-white dark:bg-gray=800 hover:bg-black/80 dark:hover:bg-primary
                            hover:text-white relative shadow-xl duration-300 group max-w-[300px] 
                            '
                            >
                                {/* Image section */}
                                <div className='h-[100px]'>
                                    <img src={data.img} alt=""
                                        className='max-w-[140xpx] block mx-auto transform
                                    -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                    />
                                </div>
                                {/* Detail section */}
                                <div className='p-4 text-center'>
                                    <div className='w-full flex items-center justify-center gap'>
                                      <FaStar /> 
                                      
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover'
                                    >{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>



        </div>
    )
}

export default TopProducts
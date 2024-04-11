import React from 'react'

const BannerImg = {
    backgroundColor: 'orange',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgrooundSize: "cover",
    height: "100%",
    width: "100%",

}

const Subscribe = () => {
    return (
        <div
            data-aos='Zoom-in'
            className='bg-orange-500 dark:bg-gray-800 text-white h-[100%] w-[100%]'
            style={BannerImg}>
            <div className='container backdrop-blur-sm py-10'>
                <div className='splace-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left
                    sm:text-4xl font-semibold'>
                        Get Notified About New Products
                    </h1>
                    <input 
                    data-aos="fade-up"
                    type="text"
                    placeholder='Enter our email'
                    className='w-full p-3 rounded-md'                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
interface Props {}

function Slider(props: Props) {
    const slides = [
        {
          url: 'https://imageproxy.wolt.com/venue/63230894cffc1afbe2a001dd/1e657dd4-f55e-11ed-90b3-f2b0c05a80e4_b9ed0e0e_f007_11ed_bdb4_42bd159e3e10_wolt_8162.png',
        },
        {
          url: 'https://mcdonalds.ge/009b13bc15ba-resized.png',
        },
        {
          url: 'https://mcdonalds.ge/627ef67f422a-resized.png',
        },
    
        {
          url: 'https://th.bing.com/th/id/OIP.5HcsluEet4mfEXRO05AnZQHaF7?pid=ImgDet&rs=1',
        },
        {
          url: 'https://th.bing.com/th/id/OIP.5HcsluEet4mfEXRO05AnZQHaF7?pid=ImgDet&rs=1',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
      };
    return (
        <>
        
       
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>






        
        </>
    )
}

export default Slider

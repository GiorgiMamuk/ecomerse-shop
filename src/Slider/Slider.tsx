import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
interface Props {}

function Slider(props: Props) {
    const slides = [
        {
          url: 'https://blog.olx.com.pk/wp-content/uploads/2022/02/Mobile-phones-1.jpg',
        },
        {
          url: 'https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png?w=1080',
        },
        {
          url: 'https://media.istockphoto.com/id/153681240/photo/young-couple-in-consumer-electronics-store-buy-tv.jpg?s=612x612&w=0&k=20&c=c9JZ5EWIIvCDo3HdR8ZY_tOALryzOgZexTcA1b-1uG0=',
        },
    
        {
          url: 'https://www.shutterstock.com/shutterstock/photos/1298437216/display_1500/stock-photo-moscow-russia-january-modern-tvs-in-the-samsung-brand-store-1298437216.jpg',
        },
        {
          url: 'https://hips.hearstapps.com/hmg-prod/images/android-phones-1651081480.jpg?crop=0.950xw:0.632xh;0.0288xw,0.175xh&resize=1200:*',
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

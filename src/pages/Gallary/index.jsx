import React, { useState } from 'react'
import './gallery.scss'
import carouselImages from '../../assets/carousel/carouselImages';


export default function Gallery() {
    const [currentImg, setCurrentImg] = useState(1)
    const prevImg = () => {
        setCurrentImg((prev) => prev - 1)
    }
    const nextImg = () => {
        setCurrentImg((prev) => prev + 1)
    }
    return (
        <div className='flex max-h-svh justify-between bg-animate'>
            <img className={`cursor-pointer w-14 ${currentImg < 2 && 'invisible'}`} src={carouselImages.leftArrow} onClick={prevImg} />
            <img className='carousel-img' src={carouselImages[currentImg]} />
            <img className={`cursor-pointer w-14 ${currentImg > 2 && 'invisible'}`} src={carouselImages.rightArrow} onClick={nextImg} />
        </div>
    )
}

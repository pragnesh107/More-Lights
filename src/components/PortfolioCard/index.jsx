import React from 'react'
import { swiperImages } from '../../assets/swiperImages/swiperImages'
import './portfoliocard.scss'

export default function PortfolioCard() {
    const cardData = [
        {
            name: "Modern Penthouse",
            image: swiperImages[13],
            text: "We will help you to unlock the beauty and comfort of your space.",
            date: "20 January, 2024"
        },
        {
            name: "Modern Penthouse",
            image: swiperImages[36],
            text: "We will help you to unlock the beauty and comfort of your space.",
            date: "20 January, 2024"
        },
        {
            name: "Modern Penthouse",
            image: swiperImages[23],
            text: "We will help you to unlock the beauty and comfort of your space.",
            date: "20 January, 2024"
        },
    ]
    return (
        <div className='grid grid-cols-3 gap-8 mt-5'>
            {cardData.map((item) => {
                return (
                    <div className='card flex flex-col gap-5 rounded-xl overflow-hidden'>
                        <div className='max-h-72 overflow-hidden'>
                            <img src={item.image} className='max-h-72 w-full object-fill'/>
                        </div>
                        <div>
                            <h2 className='font-bold text-amber-800 text-xl'>{item.name}</h2>
                            <p className='text-lg'>{item.text}</p>
                            <p className='text-md'>{item.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

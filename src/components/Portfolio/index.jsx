import React from 'react'
import './portfolio.scss'
import PortfolioCard from '../PortfolioCard'
import SectionWrapper from '../SectionWrapper'

export default function Portfolio() {
    return (
        <div className='flex justify-center flex-col client-bg px-20 py-20 gap-3'>
            <span className='text-amber-800 text-xl tracking-widest text-center'>PORTFOLIO</span>
            <h1 className='font-bold text-center text-amber-800 text-4xl'>Discover our breathtaking portfolio</h1>
            <p className='text-center text-lg'>From flat to pitched, curved to domed, our versatile installation techniques offer endless design possibilities.</p>
            <PortfolioCard />
        </div>
    )
}

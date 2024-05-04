import SectionWrapper from '../../components/SectionWrapper'
import CustomSwiper from '../../components/Swiper'
import './gallery.scss'

export default function Gallery() {
 
    return (
        <div className='flex justify-center flex-col gap-5'>
            <h1 className='font-bold text-center text-amber-800 text-4xl mt-5 underline underline-offset-8'>Gallery</h1>
        <SectionWrapper>
            <CustomSwiper />
            </SectionWrapper>
        </div>
    )
}

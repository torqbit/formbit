import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className=' h-full  py-20'>
      <div className=' relative z-10 mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center px-4'>
        <h1 className=' py-4 text-center text-4xl font-[600] leading-tight lg:text-6xl'>
          Form that capture <br /> the world&apos;s attentions.{' '}
        </h1>
        <p className='max-w-[500px] text-center text-lg font-[600] text-gray-700 md:max-w-[600] lg:max-w-[800px] lg:text-2xl'>
          With Frombit - capture feedbacks, assess students & employees, collect
          interests of potential clients and much more.
        </p>
        <div className='flex w-full items-center justify-center gap-3 px-4 py-8'>
          <button className='h-[50px] w-full rounded bg-black font-[600] text-gray-200 sm:w-[400px] md:w-[200px] lg:w-[300px]'>
            Get started for free
          </button>
        </div>
        <div className=' relative z-20 my-20 h-[200px]  w-full  rounded bg-white sm:w-[500px] md:h-[400px]  lg:h-[500px] lg:w-[1000px]'>
          <img src='/images/hero-image.png' alt='' />
        </div>
        <div className='relative z-10 -mt-[290px] h-[220px] w-full rounded-lg bg-gradient-to-r   from-[#f2b5d4]  via-pink-200  to-[#7bdff2] opacity-75  blur sm:w-[500px] md:-mt-[490px] md:h-[420px] lg:-mt-[590px] lg:h-[520px] lg:w-[1020px]'></div>
      </div>
    </section>
  );
};

export default Hero;

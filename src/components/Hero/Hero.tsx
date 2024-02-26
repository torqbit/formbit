import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className='  py-20'>
      <div className=' relative z-10 mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center'>
        <h1 className=' py-4 text-center text-6xl font-[600] leading-tight'>
          Form that capture <br /> the world&apos;s attentions.{' '}
        </h1>
        <p className='text-center text-2xl font-[600] text-gray-700'>
          With Frombit - capture feedbacks, assess students & employees, <br />{' '}
          collect interests of potential clients and much more.
        </p>
        <div className='flex items-center justify-center gap-3 py-8'>
          <button className='h-[50px] w-[300px] rounded bg-black font-[600] text-gray-200'>
            Get started for free
          </button>
        </div>

        <div className='boxHero my-20 h-[500px] w-[1000px] rounded bg-white'>
          <img src='/images/hero-image.png' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

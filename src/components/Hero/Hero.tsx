import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center'>
        <h1 className=' py-4 text-center text-6xl font-[600] leading-tight'>
          Form that capture <br /> the world&apos;s attentions.{' '}
          {/* <span className=' bg-gradient-to-tr from-[rgba(214,229,250,1)] to-[rgba(251,211,219,1)] px-2  shadow-[0_35px_50px_-105px_rgb(214,229,250)_rgba(214,229,250,1)_rgba(251,211,219,1);]'>
            business
          </span> */}
        </h1>
        <p className='text-center text-2xl font-[600] text-gray-700'>
          With Frombit - capture feedbacks, assess students & employees, <br />{' '}
          collect interests of potential clients and much more.
        </p>
        <div className='flex items-center justify-center gap-3 py-8'>
          <button className='h-[50px] w-[300px] rounded bg-black font-[600] text-gray-200'>
            Get started for free
          </button>
          {/* <button className='flex h-[50px] w-[200px] items-center justify-center gap-4 rounded-lg  border-[2px] border-gray-400  bg-gray-100 font-[600]  text-gray-800'>
            <FontAwesomeIcon icon={faPlay} size='sm' /> Watch free demo
          </button> */}
        </div>

        <div className='my-20 h-[500px] w-[1000px] rounded bg-white'>
          <img src='/images/hero-image.png' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

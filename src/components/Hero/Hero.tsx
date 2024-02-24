import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center'>
        <p className='text-center text-xl font-[600] text-gray-700'>
          Smart email campaign builder, made for Developers
        </p>
        <h1 className=' py-4 text-center text-6xl font-[600] leading-tight'>
          Turn your visitors into <br /> profitable{' '}
          <span className=' bg-gradient-to-tr from-[rgba(214,229,250,1)] to-[rgba(251,211,219,1)] px-2  shadow-[0_35px_50px_-105px_rgb(214,229,250)_rgba(214,229,250,1)_rgba(251,211,219,1);]'>
            business
          </span>
        </h1>
        <div className='flex items-center justify-center gap-3 py-4'>
          <button className='h-[50px] w-[200px] rounded-lg bg-black font-[600] text-gray-200'>
            Get more customers
          </button>
          <button className='flex h-[50px] w-[200px] items-center justify-center gap-4 rounded-lg  border-[2px] border-gray-400  bg-gray-100 font-[600]  text-gray-800'>
            <FontAwesomeIcon icon={faPlay} size='sm' /> Watch free demo
          </button>
        </div>
        <p className='text-center text-lg font-[600] text-gray-700'>
          60 Days free trial - No credit card required
        </p>
        <div className='my-20 h-[500px] w-[1000px] rounded bg-white'>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

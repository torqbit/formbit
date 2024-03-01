const Hero = () => {
  return (
    <section className='  h-full  py-20'>
      <div className=' mx-auto my-0 flex max-w-[1200px] flex-col px-8 sm:items-center sm:justify-center'>
        <h1 className=' py-4 text-left text-2xl leading-tight sm:text-center lg:text-6xl lg:font-[600]'>
          Form that capture <br /> the world&apos;s attention.{' '}
        </h1>
        <p className=' text-left text-lg text-[#666] sm:text-center md:max-w-[600px] lg:max-w-[800px] lg:text-2xl lg:font-[400]'>
          With Formbit - capture feedbacks, assess students & employees, collect
          interests of potential clients and much more.
        </p>
        <div className='flex w-full justify-start gap-3 py-8 sm:justify-center lg:items-center lg:px-4'>
          <button className='h-[50px] w-full rounded bg-black font-[400] text-gray-200 hover:shadow-xl sm:w-[400px] md:w-[200px] lg:w-[300px] lg:font-[600]'>
            Get started for free
          </button>
        </div>
        <div className=' relative z-[11] my-20 h-[200px]  w-full  rounded bg-white sm:w-[500px] md:h-[400px]  lg:h-[500px] lg:w-[1000px]'>
          <img src='/images/hero-image.png' alt='' />
        </div>
        <div className='relative z-10 -mt-[290px] h-[220px] w-full rounded-lg bg-gradient-to-r   from-[#f2b5d4]  via-pink-200  to-[#7bdff2] opacity-90  blur-lg sm:w-[500px] md:-mt-[490px] md:h-[420px] lg:-mt-[590px] lg:h-[515px] lg:w-[1015px]'></div>
      </div>
    </section>
  );
};

export default Hero;

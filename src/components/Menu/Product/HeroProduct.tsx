import { FC } from 'react';

const HeroProduct: FC<{
  label: string;
  title: string;
  description: string;
  img: string;
}> = ({ label, title, description, img }) => {
  return (
    <section className='  h-full  bg-[#eee] py-20'>
      <div className=' mx-auto my-0 flex max-w-[1200px] flex-col-reverse justify-between px-8 lg:mt-16 lg:flex-row lg:px-0 '>
        <div className='flex flex-col items-start justify-start'>
          <h4 className='max-w-[300px] pt-2 text-[#666]'>{label}</h4>
          <h1 className='m-0 py-4 text-left text-2xl text-[#000] lg:max-w-[500px] lg:text-6xl'>
            {title}
          </h1>
          <p className='max-w-[400px] py-4 text-[#666]'>{description}</p>
          <div className='flex w-full flex-col gap-4 pb-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='h-[60px] w-full rounded-md outline-none focus:border-none focus:outline-none active:border-none active:outline-none lg:w-[400px]'
            />
            <button className='h-[60px] w-full rounded-md bg-[#666] text-lg font-[500] text-[#fff] outline-none hover:shadow-xl focus:border-none focus:outline-none active:border-none active:outline-none lg:w-[400px]'>
              Get a demo
            </button>
          </div>
        </div>
        <div className=' flex  items-center justify-end  '>
          <img src={img} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;

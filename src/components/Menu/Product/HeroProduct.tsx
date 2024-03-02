import { FC } from 'react';

const HeroProduct: FC<{
  label: string;
  title: string;
  description: string;
  img: string;
}> = ({ label, title, description, img }) => {
  return (
    <section className='  h-full  py-20'>
      <div className=' mx-auto my-0 mt-16 flex  max-w-[1200px] px-8 '>
        <div className='flex flex-col items-start justify-start'>
          <h4 className='pt-2 text-[#888]'>{label}</h4>
          <h1 className='m-0 max-w-[500px] py-4 text-left text-6xl text-[#666]'>
            {title}
          </h1>
          <p className='max-w-[400px] py-4 text-[#888]'>{description}</p>
          <div className='flex flex-col gap-4 pb-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='h-[60px] w-[400px] rounded-md outline-none focus:border-none focus:outline-none active:border-none active:outline-none'
            />
            <button className='h-[60px] w-[400px] rounded-md bg-[#eee] text-[#666] outline-none focus:border-none focus:outline-none active:border-none active:outline-none'>
              Get a demo
            </button>
          </div>
        </div>
        <div>
          <img src={img} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;

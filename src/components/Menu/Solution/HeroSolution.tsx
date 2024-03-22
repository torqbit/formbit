import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const HeroSolution: FC<{
  title: string;
  description: string;
  img: string;
}> = ({ title, description, img }) => {
  return (
    <section className='  h-full  bg-[#eee] py-20'>
      <div className=' mx-auto my-0 flex max-w-[1200px] flex-col-reverse justify-between px-8 lg:mt-16 lg:flex-row lg:px-0 '>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='mt-2 py-4 text-left text-2xl text-[#000] lg:max-w-[500px] lg:text-6xl'>
            {title}
          </h1>
          <p className='max-w-[500px] py-4 text-xl text-[#666]'>
            {description}
          </p>
          <div className=' flex items-center justify-between gap-4 py-5 pb-4'>
            <button className='group flex w-[116px]   cursor-pointer  items-center rounded-full bg-[#666]  py-2  text-base font-[500]  text-white   hover:bg-black hover:text-white '>
              <div className='ml-4'> Start now</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='3'
                stroke='currentColor'
                height={15}
                fontWeight={800}
                width={15}
                className='opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-[1]'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m8.25 4.5 7.5 7.5-7.5 7.5'
                />
              </svg>
            </button>
            <button className='group flex w-[160px]  items-center text-base  font-[500] text-[#666] hover:text-black '>
              <div className=''> Contact sales</div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='3'
                stroke='currentColor'
                height={15}
                fontWeight={800}
                width={15}
                className='opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-[1]'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='m8.25 4.5 7.5 7.5-7.5 7.5'
                />
              </svg>
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

export default HeroSolution;

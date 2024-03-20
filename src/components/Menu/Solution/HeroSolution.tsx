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
            <button className='group flex w-[130px]  cursor-pointer  items-center rounded-full bg-[#666]  py-2  text-base font-[500]  text-white   hover:bg-black hover:text-white '>
              <div className='ml-4'> Start Now</div>

              <span className='relative ml-2 hidden  h-[2px] w-[13px] bg-white transition-all group-hover:inline-flex'></span>
              <FontAwesomeIcon
                className=' absolute translate-x-[98px] transition-all group-hover:translate-x-[101px]'
                icon={faGreaterThan}
                size='sm'
              />
            </button>
            <button className='group flex w-[160px]  items-center text-base  font-[500] text-[#666] hover:text-black '>
              <div className=''> Contact Sales</div>

              <span className='relative ml-2 hidden h-[2px] w-[13px] bg-[#666] transition-all group-hover:inline-flex group-hover:bg-black'></span>
              <FontAwesomeIcon
                className=' absolute translate-x-[106px] transition-all group-hover:translate-x-[110px] group-hover:text-black'
                icon={faGreaterThan}
                size='sm'
              />
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

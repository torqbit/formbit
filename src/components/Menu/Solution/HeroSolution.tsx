import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
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
          <h1 className='m-0 py-4 text-left text-2xl text-[#000] lg:max-w-[500px] lg:text-6xl'>
            {title}
          </h1>
          <p className='max-w-[400px] py-4 text-[#666]'>{description}</p>
          <div className='flex gap-4 pb-4'>
            <button className='flex h-[30px] w-[110px] items-center justify-between rounded-full bg-[#666] p-2 font-[500] text-[#fff]'>
              Start Now
              <FontAwesomeIcon
                className='h-[13px] w-[13px]'
                icon={faGreaterThan}
              />
            </button>
            <button className='flex h-[30px] items-center justify-between p-2 '>
              Contact sales
              <FontAwesomeIcon
                className='ml-2 h-[13px] w-[13px]'
                icon={faGreaterThan}
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

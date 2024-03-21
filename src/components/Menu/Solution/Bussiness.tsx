import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FC, ReactNode } from 'react';

const View: FC<{
  title: string;
  description: string;
  viewData: {
    name1: string;
    name2: string;
    name3: string;
    icon1: ReactNode;
    icon2: ReactNode;
    icon3: ReactNode;
    title: string;
    description: string;
  }[];
}> = ({ title, description, viewData }) => {
  return (
    <section className='  h-full  bg-[#eee] py-2 lg:py-20'>
      <div className=' mx-auto my-0 w-[1200px]   px-8 lg:px-0'>
        <div className=' w-full  py-4 text-left lg:text-center'>
          <h1 className='py-4 text-left text-5xl text-black '>{title}</h1>
          <div className='flex'>
            <p className='max-w-[600px]  text-xl font-normal text-[#666]'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex cursor-pointer flex-col  items-start gap-[130px]  pt-8 lg:flex-row'>
          {viewData.map((data, i) => {
            return (
              <div key={i} className='group shadow-2xl '>
                <div
                  className='absolute h-[465px] w-[580px] 
                  transform-none cursor-pointer place-content-center rounded-lg
                border-t-8 border-[#666]
                bg-white       
                duration-200
                 ease-in group-hover:scale-[1.021]   	
                  group-hover:shadow-[0_80px_150px_-25px_rgba(0,0,0,0.3)]'
                ></div>

                {/* scale-[1.021] */}
                <div className='relative ml-12 mt-14 w-[450px]'>
                  <h4 className='group pb-5 pt-8 text-4xl font-medium text-black'>
                    {data.title}
                  </h4>
                  <p className='group  sticky w-[450px] text-xl	 font-normal text-[#666]'>
                    {data.description}
                  </p>

                  <div className='group mt-6 flex  items-center justify-between    text-[#666]  hover:text-black'>
                    <button className='group flex w-[160px]  items-center text-base  font-[500] text-[#666] hover:text-black '>
                      <div className='font-bold group-hover:text-black'>
                        Learn more
                      </div>

                      <div className='relative ml-2 hidden  h-1 w-[12px] bg-[#666] transition-all group-hover:inline-flex group-hover:bg-black'></div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='3'
                        stroke='currentColor'
                        height={15}
                        fontWeight={800}
                        width={15}
                        className=' absolute translate-x-[93px] transition-all group-hover:translate-x-[97px] group-hover:text-black'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </button>
                  </div>

                  <hr className='mt-[70px]' />
                  <div className='mt-5 flex h-[70px] items-center	justify-between gap-9 object-cover p-5	 text-[#666] transition-none'>
                    <div className=' flex items-center justify-between hover:fill-current hover:text-[#888]'>
                      <span>{data.icon1}</span>
                      <h1 className=' ml-2 text-xl'>{data.name1}</h1>
                    </div>
                    <div className=' flex items-center justify-between hover:fill-current hover:text-[#888]'>
                      <span>{data.icon2}</span>
                      <h1 className=' ml-2 text-xl'>{data.name2}</h1>
                    </div>
                    <div className=' flex items-center justify-between hover:fill-current hover:text-[#888]'>
                      <span>{data.icon3}</span>

                      <h1 className=' ml-2 text-xl'>{data.name3}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default View;

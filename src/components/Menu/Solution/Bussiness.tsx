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
      <div className=' mx-auto my-0   max-w-[1200px]  px-8 lg:px-0 '>
        <div className=' w-full  py-4 text-left lg:text-center'>
          <h1 className='py-4 text-left text-5xl text-black '>{title}</h1>
          <div className='flex'>
            <p className='max-w-[600px]  text-xl font-normal text-[#666]'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-between gap-6 pt-8 lg:flex-row'>
          {viewData.map((data, i) => {
            return (
              <div
                key={i}
                className='group h-[480px] w-full cursor-pointer place-content-center
                rounded-lg border-t-8
                border-[#666]
                 bg-white p-12  duration-300  ease-in	
                 hover:scale-[1.021] hover:shadow-[0_80px_150px_-25px_rgba(0,0,0,0.3)]'
              >
                <div className=''>
                  <h4 className='group pb-4 pt-8 text-4xl font-medium text-black'>
                    {data.title}
                  </h4>
                  <p className='group max-w-[450px] text-xl font-normal text-[#666]'>
                    {data.description}
                  </p>
                  <button className='mt-5 flex items-center	 justify-between text-xl font-medium text-[#666]  group-hover:text-black'>
                    Learn more
                    <FontAwesomeIcon
                      className='ml-1 h-[13px] w-[13px] group-hover:hidden'
                      icon={faGreaterThan}
                    />
                    <FontAwesomeIcon
                      className='ml-1 hidden h-[13px] w-[13px] group-hover:inline-block	 '
                      icon={faArrowRight}
                    />
                  </button>
                  <hr className='mt-[80px]' />
                  <div className='mt-5 flex h-[70px]	items-center justify-between gap-9 object-cover	 text-[#666] transition-none'>
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

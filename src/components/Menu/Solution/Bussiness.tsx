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
        <div className='flex w-full flex-col items-start justify-between pt-4 lg:flex-row'>
          {viewData.map((data, i) => {
            return (
              <div
                key={i}
                className='group h-[440px] scale-95 cursor-pointer
                place-content-center
                 rounded-md border-t-8 border-[#666] bg-white p-12 transition-all	 
                 duration-500 ease-in-out hover:scale-100	 hover:shadow-2xl	'
              >
                <div>
                  <h4 className='group pb-4 text-4xl font-medium text-black'>
                    {data.title}
                  </h4>
                  <p className='group max-w-[300px] text-xl font-normal text-[#666]'>
                    {data.description}
                  </p>
                  <button className='mt-4 text-xl text-[#666]  group-hover:text-black'>
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
                  <hr className='mt-16' />
                  <div className=' scale-none mt-5 flex h-[70px]	w-[90px] items-center justify-between gap-9 object-cover	 text-[#666] transition-none'>
                    <div className=' flex items-center justify-between hover:fill-current group-hover:text-[#888]'>
                      {data.icon1}
                      <h1 className='group ml-1 text-xl'>{data.name1}</h1>
                    </div>
                    <div className='flex  group-hover:text-[#888]'>
                      {data.icon2}
                      <h1 className='group ml-1 text-xl'>{data.name2}</h1>
                    </div>
                    <div className='flex group-hover:text-[#888]'>
                      {data.icon3}
                      <h1 className='group ml-1 text-xl'>{data.name3}</h1>
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

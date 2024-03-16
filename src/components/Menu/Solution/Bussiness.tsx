import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FC, ReactNode } from 'react';
import { Card } from 'nextra/components';

const View: FC<{
  title: string;
  description: string;
  viewData: {
    icon: ReactNode;
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
            <p className='max-w-[600px]  text-3xl font-normal text-[#666]'>
              {description}
            </p>
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-between  gap-4 pt-4 lg:flex-row'>
          {viewData.map((data, i) => {
            return (
              <div
                key={i}
                className='h-[420px] cursor-pointer place-content-center rounded-md bg-white p-12 hover:shadow-2xl'
              >
                <div>
                  <h4 className='pb-4 text-4xl font-medium text-black'>
                    {data.title}
                  </h4>
                  <p className='max-w-[300px] text-xl font-normal text-[#666]'>
                    {data.description}
                  </p>
                  <button className='mt-4 text-xl text-blue-500'>
                    Learn more{' '}
                    <FontAwesomeIcon
                      className='ml-1 h-[13px] w-[13px]'
                      icon={faGreaterThan}
                    />
                  </button>
                  <hr className='mt-16' />
                  <div className='mt-10 flex h-[20px] w-[81px] gap-6'>
                    {data.icon}
                    {data.icon}
                    {data.icon}
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

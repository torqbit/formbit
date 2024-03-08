import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

const RealTime: FC<{
  title: string;
  description: string;
  link: string;
  array: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
  img: string;
  flex: string;
}> = ({ title, description, link, array, img, flex }) => {
  return (
    <section className='  h-full  bg-[#eee] py-20'>
      <div
        className={`mx-auto my-0 ${flex} flex max-w-[1200px] flex-col  items-center   justify-between gap-10 px-8 lg:gap-40 lg:px-0 `}
      >
        <div className='lg:w-[50%] lg:p-4'>
          <h2 className='max-w-[500px] pb-4 text-2xl text-black lg:text-3xl'>
            {title}
          </h2>
          <p className='max-w-[400px] pb-4 text-lg text-[#666]'>
            {description}
          </p>
          <Link
            className='group flex  items-center gap-2 text-lg text-[#888]  hover:text-[#666] '
            href={''}
          >
            {link}{' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              size='sm'
              className='relative top-[2px] transition-all group-hover:translate-x-3'
            />
          </Link>
          <div className='flex w-full flex-col items-start justify-center gap-4 pt-8'>
            {array.map((data, i) => {
              return (
                <div
                  key={i}
                  className=' flex flex-col items-start gap-2 py-4   lg:flex-row'
                >
                  <div className='flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#fff] shadow-xl  lg:mb-8'>
                    {data.icon}
                  </div>
                  <div>
                    <h4 className='pb-4 text-xl text-black'>{data.title}</h4>
                    <p className='max-w-[400px] text-sm text-[#666]'>
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='lg:w-[50%] lg:p-4'>
          <img src={img} alt='' />
        </div>
      </div>
    </section>
  );
};

export default RealTime;

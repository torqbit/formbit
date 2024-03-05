import Link from 'next/link';
import { FC } from 'react';

const ChangelogCard: FC<{
  date: string;
  title: string;
  img: string;
  description: string;
}> = ({ date, title, img, description }) => {
  return (
    <section className='  min-h-[300px]  bg-[#fff] lg:pt-20   '>
      <div className=' mx-auto my-0 flex max-w-[1200px] items-start gap-16 border-t-2 border-black border-opacity-10 px-8   lg:px-0 lg:py-10 '>
        <div className='w-[300px] pt-2 text-lg  text-[#666]'>{date}</div>
        <div>
          <Link href={''}>
            <h2 className='m-0 pb-6 pt-0'>{title}</h2>
          </Link>
          <img className='pb-6' src={img} alt='' />
          <p className='max-w-[500px] '>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ChangelogCard;

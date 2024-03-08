import DateFormater from '@/components/DateFormater/DateFormater';
import {
  faChevronLeft,
  faChevronRight,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

const ChangelogCard: FC<{
  date: string;
  title: string;
  img: string;
  description: string;
  href: string;
  link: string;
  index?: number;
  lastIndex?: number;
  post: boolean;
  fileName: string;
  content: ReactNode;
}> = ({
  date,
  title,
  img,
  description,
  href,
  link,
  index,
  lastIndex,
  fileName,
  post,
  content,
}) => {
  const pageLink = fileName.replace(/\s+/g, '');
  return (
    <section
      className={` 
    ${index === lastIndex ? `lg:pb-10` : `lg:pb-0`}
  

    bg-[#fff]  py-5 lg:pt-10`}
    >
      <div className='mx-auto  my-0   max-w-[1200px]'>
        <div className=' mx-4  flex flex-col items-start gap-8 border-t-2  border-black border-opacity-10 px-4 py-10   md:flex-row md:gap-[175px] lg:px-0  lg:pt-20 '>
          <div
            className={`flex flex-col gap-2 text-lg text-[#666] md:sticky  md:top-28  md:pt-2 lg:h-[100px] 
          lg:w-[240px]`}
          >
            {post && (
              <Link
                href={'/changelog'}
                className='flex items-center gap-2 hover:text-[#000] md:text-lg'
              >
                <FontAwesomeIcon icon={faChevronLeft} size='sm' />
                All Post
              </Link>
            )}
            <Link href={`/changelog/${pageLink}`}>
              <DateFormater dateString={date} />
            </Link>
          </div>

          <div className={` overflow-y-auto`}>
            <Link href={`/changelog/${pageLink}`}>
              <h2 className='m-0 max-w-[550px] pb-6 pt-0'>{title}</h2>
            </Link>
            <img className='pb-6' src={img} alt='' />
            <p className='max-w-[550px] '>{description}</p>
            {post && (
              <div>
                <div
                  className='text-md flex max-w-[550px] flex-col gap-4 py-4'
                  dangerouslySetInnerHTML={{ __html: content as any }}
                />
              </div>
            )}
            <Link
              href={href}
              className='group flex w-full items-center justify-between pt-6 text-[#666]'
            >
              <span className='flex items-center gap-2'>
                {' '}
                <FontAwesomeIcon icon={faChevronRight} />
                {link}
              </span>
              <FontAwesomeIcon
                icon={faLink}
                className='opacity-0 transition-all group-hover:opacity-[1]'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangelogCard;

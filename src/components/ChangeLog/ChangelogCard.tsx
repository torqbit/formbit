import {
  faChevronLeft,
  faChevronRight,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';

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
}> = ({
  date,
  title,
  img,
  description,
  href,
  link,
  index,
  lastIndex,
  post,
}) => {
  const pageLink = title.replace(/\s+/g, '-');
  return (
    <section
      className={` 
    ${index === lastIndex ? `lg:pb-10` : `lg:pb-0`}
  

    bg-[#fff]  lg:pt-10`}
    >
      <div className=' mx-auto my-0  flex  max-w-[1200px] items-start gap-[190px]  border-t-2 border-black border-opacity-10 px-8   lg:px-0 lg:pt-20 '>
        <div
          className={`sticky top-28  h-[100px]  pt-2 text-lg 
          text-[#666]`}
        >
          {post && (
            <Link
              href={'/changelog'}
              className='flex items-center gap-2 hover:text-[#000]'
            >
              <FontAwesomeIcon icon={faChevronLeft} size='sm' />
              All Post
            </Link>
          )}
          <Link href={`/changelog/${pageLink}`}>{date}</Link>
        </div>

        <div className={` overflow-y-auto`}>
          <Link href={`/changelog/${pageLink}`}>
            <h2 className='m-0 pb-6 pt-0'>{title}</h2>
          </Link>
          <img className='pb-6' src={img} alt='' />
          <p className='max-w-[600px] '>{description}</p>
          <div></div>
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
    </section>
  );
};

export default ChangelogCard;

import DateFormater from './DateFormater';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const MoreStories: FC<{
  morePost: [
    {
      coverImage: string;
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      author: { picture: string; name: string };
    }
  ];
}> = ({ morePost }) => {
  return (
    <>
      <section
        className='mx-auto my-0  max-w-[1200px] px-4 py-20 md:px-0'
        id='blog'
      >
        <h2 className='text-primary-600 w-full text-center font-bold md:text-2xl'>
          BLOG
        </h2>
        <h1 className='w-full py-2 text-center text-xl md:text-5xl'>
          Recent From Blog
        </h1>
        {morePost?.length > 2 && (
          <div className='md:grid-col-2 grid-col-1 grid  items-center gap-10 py-8 sm:flex-row lg:grid-cols-3 '>
            {morePost?.map((blog, i) => {
              return (
                <div key={i} className='h-full rounded  shadow-xl'>
                  <img
                    src={blog.coverImage}
                    alt=''
                    className='h-[250px] w-full rounded rounded-b-[0px] object-cover object-center'
                  />
                  <div className='py-8'>
                    <div className='flex w-full items-center justify-between px-8  text-[10px]'>
                      <div className='flex items-center gap-1  font-bold text-gray-400'>
                        <FontAwesomeIcon
                          icon={faUser}
                          className='text-primary-600'
                          size='sm'
                        />
                        {blog.author.name}
                      </div>
                      <div className='flex items-center gap-1  font-bold text-gray-400'>
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className='text-primary-600'
                          size='sm'
                        />
                        <DateFormater dateString={blog.date} />
                      </div>
                      <div className='text-primary-600 flex items-center gap-1  font-bold'>
                        <FontAwesomeIcon
                          icon={faComment}
                          color='text-primary-600'
                          size='sm'
                        />
                        0 COMMENTS
                      </div>
                    </div>
                    <h2 className='hover:text-primary-600 px-8 py-2  text-2xl font-[600] transition-all  hover:underline'>
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h2>
                    <p className='px-8 py-2  text-lg text-gray-400'>
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};
export default MoreStories;

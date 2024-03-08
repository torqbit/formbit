import DateFormater from '@/components/Blog/DateFormater';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { FC, useState } from 'react';

const Blog: FC<{
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
  const [active, setActive] = useState<string>('');

  return (
    <>
      <Header
        menuActive={{
          active: false,
          menu: '',
        }}
        onMenuActive={function (value: boolean, name: string): void {}}
      />
      <section id='blog'>
        <div className='m-auto bg-gray-50 '>
          <div className=' flex  h-[250px] w-[full] items-end bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 align-baseline  md:h-[250px]'>
            <h1 className='mb-[50px] p-6 text-left text-[35px]  font-normal text-black md:m-auto md:mb-[20px] md:mt-0 md:w-[1200px]  md:p-2 md:text-[60px]'>
              Blog
            </h1>
          </div>
          <div className='m-auto grid grid-rows-1 gap-2 pt-7  sm:flex-row md:w-[1200px] md:grid-cols-3 md:items-center md:gap-6 '>
            {morePost.map((blog, i) => {
              return (
                <div
                  key={i}
                  className='ml-3  h-[auto] w-[350px] rounded-lg bg-white  md:max-h-[600px] md:w-[390px]'
                >
                  <div
                    onMouseOver={() => {
                      setActive(blog.author.name);
                    }}
                    onMouseLeave={() => {
                      setActive('');
                    }}
                    className={`relative z-20 cursor-pointer rounded-lg border-2 border-opacity-40 bg-white
                p-2 text-[#666]
              
                transition-all  lg:m-0  `}
                  >
                    <a href={`/blog/${blog.slug}`}>
                      <img
                        src={blog.coverImage}
                        alt=''
                        className='h-[300px] w-[352px]  rounded rounded-b-[0px] object-cover md:h-[210px] md:w-full'
                      />
                      <h2 className='h-[100px] pt-6   text-2xl   font-[600] text-black transition-all  '>
                        <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                      </h2>
                      <hr className='mb-4 mt-4 bg-gray-400' />

                      <div className='flex w-full items-center gap-1 text-[15px] font-normal  text-[#666]  md:w-[300px]'>
                        <DateFormater dateString={blog.date} />
                        <img
                          src={blog.author.picture}
                          className='ml-4 mr-4 h-[30px] w-[30px] rounded-full object-cover '
                          alt=''
                        />
                        <span className='flex items-center gap-1  font-normal  text-[#666] '>
                          {blog.author.name}
                        </span>
                      </div>
                    </a>
                  </div>
                  {active === blog.author.name && (
                    <div className='relative z-0 -mt-[400px] h-[400px] w-full rounded-lg   bg-gradient-to-r  from-[#f2b5d4]  via-pink-200 to-[#7bdff2]   opacity-75 blur '></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Blog;

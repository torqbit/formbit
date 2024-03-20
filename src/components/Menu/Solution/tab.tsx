import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TabItem() {
  const [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'A diamond is forever ',
        date: '5h ago',
        commentCount: 5,
        shareCount:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta ',
      },
      {
        id: 2,
        title: 'Finger lickin good ',
        date: '2h ago',
        commentCount: 3,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta          ',
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Just do it',
        date: 'Jan 7',
        commentCount: 29,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta          ',
      },
      {
        id: 2,
        title: 'Save money. Live better',
        date: 'Mar 19',
        commentCount: 24,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta          ',
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Save money. Live better',
        date: '2d ago',
        commentCount: 9,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta          ',
      },
      {
        id: 2,
        title: 'Red Bull gives you wings',
        date: '4d ago',
        commentCount: 1,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta          ',
      },
    ],
  });

  return (
    <section className='bg-[#eee] py-10 pb-[450px]'>
      <div className='m-auto w-[1200px]'>
        <Tab.Group>
          <Tab.List className='space-x- flex w-[100%] hover:text-black'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-5 text-base font-medium leading-5',
                    ' ring-white/60',
                    selected
                      ? ' border-t-4 border-[#666] text-black'
                      : 'hover:bg-gray/[0.12] border-t-4 border-white text-[#666] hover:text-black'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2'>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className={classNames('rounded-xl p-1', '')}>
                <div className='group: mt-5 flex  justify-between gap-6 rounded-xl '>
                  {posts.map((post) => (
                    <div key={post.id} className='group'>
                      <div
                        className='absolute h-[690px] w-[565px] 
                  transform-none cursor-pointer place-content-center rounded-lg
                border-t-8 border-[#666]
                bg-white       
                duration-200
                 ease-in group-hover:scale-[1.021]   	
                  group-hover:shadow-[0_80px_150px_-25px_rgba(0,0,0,0.3)]'
                      ></div>
                      <div className='relative'>
                        <div
                          className='mt-2 p-8
'
                        >
                          <button className='mb-6 w-[70px] rounded-full bg-[#eee] p-1 text-xs font-medium'>
                            No Code
                          </button>
                          <h3 className='group mt-2 text-4xl font-medium leading-5'>
                            {post.title}
                          </h3>

                          <div className='group mt-8 flex w-[500px] space-x-1 text-xl font-normal text-[#666]'>
                            <p>{post.shareCount} shares</p>
                          </div>
                          <div className='group mt-8 flex cursor-pointer items-center justify-between    font-[500] text-[#666]  hover:text-black'>
                            <button className='group flex w-[160px]  items-center  font-[500] text-[#666] hover:text-black '>
                              <div className='text-base font-bold'>
                                Learn More
                              </div>

                              <span className='relative ml-2 hidden h-1 w-[13px] bg-[#666] transition-all group-hover:inline-flex group-hover:bg-black'></span>
                              <FontAwesomeIcon
                                className=' absolute translate-x-[95px] transition-all group-hover:translate-x-[100px] group-hover:text-black'
                                icon={faGreaterThan}
                                size='sm'
                              />
                            </button>
                          </div>
                          <a
                            href='#'
                            className={classNames(
                              'absolute inset-0 rounded-md',
                              'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                            )}
                          />
                        </div>
                        <div className='absolute p-1 transition-all group-hover:scale-[1.021]'>
                          <img
                            className='mt-4'
                            src='https://placehold.co/600x400'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

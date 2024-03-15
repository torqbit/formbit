import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non? ',
      },
      {
        id: 2,
        title: 'Finger lickin good ',
        date: '2h ago',
        commentCount: 3,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          ',
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Just do it',
        date: 'Jan 7',
        commentCount: 29,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          ',
      },
      {
        id: 2,
        title: 'Save money. Live better',
        date: 'Mar 19',
        commentCount: 24,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          ',
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Save money. Live better',
        date: '2d ago',
        commentCount: 9,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          ',
      },
      {
        id: 2,
        title: 'Red Bull gives you wings',
        date: '4d ago',
        commentCount: 1,
        shareCount:
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          ',
      },
    ],
  });

  return (
    <section className=' bg-[#eee] py-10'>
      <div className='m-auto max-w-[1200px]'>
        <Tab.Group>
          <Tab.List className='flex w-[100%] space-x-1 rounded-xl bg-white p-1'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-black shadow'
                      : 'hover:bg-gray/[0.12] text-[#666] hover:text-black'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2'>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-1',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul className='flex h-[550px] w-[1200px] justify-between gap-6'>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className='relative w-[600px] rounded-md p-8 shadow-md hover:bg-gray-100'
                    >
                      <h3 className='text-2xl font-medium leading-5'>
                        {post.title}
                      </h3>

                      <ul className='mt-4 flex w-[400px] space-x-1 text-xl font-normal text-gray-500'>
                        <li>{post.shareCount} shares</li>
                      </ul>
                      <button className='mt-4 flex items-center'>
                        Learn more
                        <FontAwesomeIcon className='ml-2' icon={faArrowRight} />
                      </button>
                      <img
                        className='mt-6'
                        src='https://placehold.co/600x300'
                        alt=''
                      />

                      <a
                        href='#'
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { FC } from 'react';
export const menuList = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
        />
      </svg>
    ),
    title: 'Quiz',
    description: 'Assess the skills of your audience',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
        />
      </svg>
    ),
    title: 'Forms',
    description: 'Engage with your audience',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
        />
      </svg>
    ),
    title: 'Polls',
    description: 'Record interests of your audience',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
      </svg>
    ),
    title: 'Sell',
    description: 'Use forms to sell your product',
  },

  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
        />
      </svg>
    ),
    title: 'Connect',
    description: 'Send and manage your audience',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-6 w-6 text-[#666] group-hover:text-[#444]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z'
        />
      </svg>
    ),
    title: 'Analyze',
    description: 'Analyze the usage of your forms',
  },
];

const Product: FC<{ menu: string }> = ({ menu }) => {
  const customerstories = [
    {
      img: '/images/logos/stripe.png',
      title:
        'Stripe used Formbit to connect with merchants to get realtime feedback',
    },
    {
      img: '/images/logos/twitch.png',

      title:
        'Twitch used Formbit to connect with streamers to get realtime feedback',
    },
    {
      img: '/images/logos/spotify.png',

      title:
        'Spotify used Formbit to connect with musicians to get realtime feedback ',
    },
  ];
  return (
    <div
      className={`absolute left-[200px] top-12 z-[10] flex
    items-start justify-center rounded-lg bg-white transition-all `}
    >
      <div className=' h-full  cursor-pointer  p-6'>
        {menuList.map((list, i) => {
          return (
            <Menu.Item key={i}>
              <div className='group flex items-center justify-start gap-2 rounded-md p-1 '>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-[#eee] bg-opacity-50  p-2 text-gray-100 '>
                  <div className='rounded-sm  p-1 '>{list.icon}</div>
                </div>
                <div>
                  <h4 className=' flex items-center gap-1  text-lg font-[500] text-[#666]'>
                    {list.title}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='text-[12px] opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-[1]'
                    />
                  </h4>
                  <p className='text-[15px] text-[#888] group-hover:font-[400]  group-hover:text-[#444]   '>
                    {list.description}
                  </p>
                </div>
              </div>
            </Menu.Item>
          );
        })}
      </div>
      <div className='h-full  rounded-r-lg border-l-2 border-gray-200 bg-white p-6'>
        <Link
          href=''
          className=' group  cursor-pointer  text-2xl tracking-wider text-[#666]  group-hover:font-[400]  group-hover:text-[#888]  '
        >
          Success stories
          <FontAwesomeIcon
            icon={faChevronRight}
            size='2xs'
            className='relative top-[2px] opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-[1]'
          />
        </Link>
        <div className='mt-2 flex flex-col items-start justify-start gap-2 py-1 '>
          {customerstories.map((stroy, i) => {
            return (
              <Menu.Item key={i}>
                <div className='group flex flex-col items-start justify-start gap-1 py-2 '>
                  <div className=' flex items-center justify-center rounded-lg  bg-opacity-50 text-gray-100'>
                    <img src={stroy.img} alt='' />
                  </div>
                  <p className='max-w-[280px] cursor-pointer text-[15px] text-[#888] transition-all group-hover:text-[#444] '>
                    {stroy.title}
                  </p>
                </div>
              </Menu.Item>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;

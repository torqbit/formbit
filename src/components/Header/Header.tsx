import { Fragment, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import SideNav from '@/components/SideNav/SideNav';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import Solution from '@/components/Menu/SolutionSection/Solution';

const Header = () => {
  const [showSideNav, setSideNav] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const onAnchorClick = () => {
    setSideNav(false);
  };
  return (
    <header className='relative h-[60px]  bg-white  '>
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] '>
        <div className=' hidden items-center justify-between py-3 lg:flex'>
          <div className='flex items-center gap-12 transition-all'>
            <a
              href='#'
              className='group flex items-center gap-1 text-lg font-[600] '
            >
              <img
                src='/images/formbit-logo.png'
                className='w-[120px]'
                alt=''
              />
            </a>
            <a
              href=''
              className='text-[18px] font-[500] text-gray-400 hover:text-gray-800'
            >
              Product
            </a>

            <Menu as='div'>
              <Menu.Button className=' text-[18px] font-[500] text-gray-400 hover:text-gray-800'>
                Solution
              </Menu.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Menu.Items>
                  <Menu.Item>
                    <Solution />
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <a
              href='#Pricing'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Pricing
            </a>
            <Link
              href='/docs'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Documentation
            </Link>
          </div>
          <div className='flex items-center gap-5'>
            <a
              href=''
              className='text-[18px] font-[500]  text-gray-600 hover:text-gray-800'
            >
              Customer Login
            </a>
            <button className='flex h-[35px] w-[100px] items-center justify-center rounded-lg   bg-black   text-center font-[500] text-white shadow-lg'>
              Sign up
            </button>
          </div>
        </div>
        {/**
         * responsive
         */}

        <div className=' lg:hidden'>
          <SideNav isOpen={showSideNav} onAnchorClick={onAnchorClick} />
        </div>
        <img
          src='/images/formbit-logo.png'
          className='absolute left-8 top-3  text-black lg:hidden '
          alt=''
        />
        <div className='absolute right-5 top-1 text-black lg:hidden '>
          <Hamburger
            rounded
            direction='left'
            toggled={showSideNav}
            onToggle={(toggle: boolean | ((prevState: boolean) => boolean)) => {
              setSideNav(toggle);
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

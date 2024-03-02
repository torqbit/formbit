import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import SideNav from '@/components/SideNav/SideNav';

import Product from '@/components/Menu/Product';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

const Header = () => {
  const [showSideNav, setSideNav] = useState<boolean>(false);
  const [active, setActive] = useState(false);

  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });

  const onAnchorClick = () => {
    setSideNav(false);
  };

  return (
    <header className='  fixed left-0 right-0 z-[100]  h-[60px] bg-white  '>
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] '>
        <div className=' hidden items-center justify-between py-3 lg:flex'>
          <div className='flex items-center gap-8 transition-all'>
            <Link
              href='/'
              className='flex items-center gap-1 text-lg font-[600] '
            >
              <img
                src='/images/formbit-logo.png'
                className='w-[120px]'
                alt=''
              />
            </Link>
            <div
              onClick={() =>
                setMenuActive({
                  active: !menuActive.active,
                  menu: 'product',
                })
              }
            >
              <Menu as='div'>
                <Menu.Button
                  className={`group flex items-center gap-2  text-[18px] font-[500]  hover:text-gray-800
               ${
                 menuActive.menu === 'product' && menuActive.active
                   ? `text-gray-800`
                   : `text-gray-400`
               }
               `}
                >
                  Product
                </Menu.Button>
                <Transition
                  show={menuActive.active}
                  enter='transition-all duration-150'
                  enterFrom='opacity-0 '
                  enterTo='opacity-100 '
                  leave='transition-all duration-150'
                  leaveFrom='opacity-100 '
                  leaveTo='opacity-0 '
                  unmount={true}
                >
                  <Menu.Items>
                    <Menu.Item>
                      <Product menu={menuActive.menu} />
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <Link
              onClick={() =>
                setMenuActive({
                  active: !menuActive.active,
                  menu: 'solution',
                })
              }
              href='#price'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Solution
            </Link>

            <Link
              href='/pricing'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Pricing
            </Link>
            <Link
              href='/pricing'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Docs
            </Link>
            <Link
              href='#price'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Blogs
            </Link>
          </div>
          <div className='flex items-center gap-5'>
            <Link
              href=''
              className='text-[18px] font-[500]  text-gray-600 hover:text-gray-800'
            >
              Customer Login
            </Link>
            <button className='flex h-[35px] w-[100px] items-center justify-center rounded-lg   bg-black   text-center font-[500] text-white shadow-lg'>
              Sign up
            </button>
          </div>
        </div>
        {/**
         * responsive
         */}

        <div className=' relative  lg:hidden'>
          <SideNav
            isOpen={showSideNav}
            onAnchorClick={onAnchorClick}
            active={active}
            setActive={setActive}
          />
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
              setSideNav(!showSideNav);
              // setActive(false);
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

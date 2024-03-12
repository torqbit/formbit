import { FC, Fragment, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import SideNav from '@/components/SideNav/SideNav';
import Solution from '@/components/Menu/SolutionSection/Solution';
import Product from '@/components/Menu/Product';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Header: FC<{
  menuActive: { active: boolean; menu: string };
  onMenuActive: (value: boolean, name: string) => void;
}> = ({ menuActive, onMenuActive }) => {
  const [showSideNav, setSideNav] = useState<boolean>(false);
  const [active, setActive] = useState(false);

  const onAnchorClick = () => {
    setSideNav(false);
  };

  return (
    <header
      className='  fixed left-0 right-0 z-[1000]  h-[60px] bg-white  '
      onClick={() => {
        menuActive.active && onMenuActive(false, '');
      }}
      onMouseLeave={() => {
        menuActive.active && onMenuActive(false, '');
      }}
    >
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] '>
        <div className=' hidden items-center justify-between py-3 lg:flex'>
          <div className='relative z-[2000] flex items-center gap-8 transition-all'>
            <Link
              onMouseOver={() => onMenuActive(false, '')}
              href='/'
              className='flex items-center gap-1 text-lg font-[600] '
            >
              <img
                src='/images/formbit-logo.png'
                className='w-[120px]'
                alt=''
              />
            </Link>

            <Link
              onMouseOver={() => onMenuActive(true, 'product')}
              href=''
              className={` flex items-center
              gap-1 text-[18px] font-[500]
              ${
                menuActive.menu === 'product' && menuActive.active
                  ? `text-gray-800`
                  : `text-gray-400`
              }
              text-gray-400 hover:text-gray-800`}
            >
              Product{' '}
              <FontAwesomeIcon
                className='pt-1'
                size='sm'
                icon={
                  menuActive.menu === 'product' && menuActive.active
                    ? faChevronUp
                    : faChevronDown
                }
              />
            </Link>

            <Link
              onMouseOver={() => onMenuActive(true, 'solution')}
              href=''
              className={` flex items-center
              gap-1 text-[18px] font-[500]
              ${
                menuActive.menu === 'solution' && menuActive.active
                  ? 'text-gray-800'
                  : 'text-gray-400'
              }
              text-gray-400 hover:text-gray-800`}
            >
              Solution
            </Link>

            <Link
              onMouseOver={() => onMenuActive(false, '')}
              href='/pricing'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Pricing
            </Link>

            <Link
              onMouseOver={() => onMenuActive(false, '')}
              href='/blog'
              className=' text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Blogs
            </Link>
            <Link
              onMouseOver={() => onMenuActive(false, '')}
              href='/docs'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Documentation
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
            }}
          />
        </div>
      </div>

      {
        <div
          className={`
          
          ${
            menuActive.active && menuActive.menu === 'product'
              ? `  -translate-y-16 transform opacity-100 transition duration-200 ease-out  `
              : ` translate-y-4 transform opacity-0 duration-200 `
          }`}
        >
          <Menu
            as='div'
            className={' absolute -left-[10px] top-[20px] z-10  h-full w-full'}
          >
            <Transition
              show={menuActive.active && menuActive.menu === 'product'}
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-100'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-100'
            >
              <Menu.Items>
                <Product menu={menuActive.menu} />
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      }
      {
        <div
          className={`
          
          ${
            menuActive.active && menuActive.menu === 'solution'
              ? `  -translate-y-16 transform opacity-100 transition duration-200 ease-out  `
              : ` translate-y-4 transform opacity-0 duration-200 `
          }`}
        >
          <Menu
            as='div'
            className={' absolute -left-[10px] top-[67px] z-10  h-full w-full'}
          >
            <Transition
              show={menuActive.active && menuActive.menu === 'solution'}
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-100'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-100'
            >
              <Menu.Items>
                <Solution menu={menuActive.menu} />
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      }
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import SideNav from '@/components/SideNav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Product from '@/components/Menu/Product';

const Header = () => {
  const [showSideNav, setSideNav] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState('');

  const onAnchorClick = () => {
    setSideNav(false);
  };
  return (
    <header
      className='  fixed left-0 right-0 h-[60px]  bg-white  '
      onMouseLeave={() => setMenuActive('')}
    >
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] '>
        <div className=' hidden items-center justify-between py-3 lg:flex'>
          <div className='flex items-center gap-8 transition-all'>
            <a href='#' className='flex items-center gap-1 text-lg font-[600] '>
              <img
                src='/images/formbit-logo.png'
                className='w-[120px]'
                alt=''
              />
            </a>
            <a
              onMouseOver={() => setMenuActive('product')}
              href=''
              className={`group flex items-center gap-2 text-[18px] font-[500]  hover:text-gray-800
              ${menuActive === 'product' ? `text-gray-800` : `text-gray-400`}
              `}
            >
              Product
              <span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`text-gray-400 transition-all
               ${
                 menuActive === 'product'
                   ? ` rotate-[-180deg] text-gray-800`
                   : `rotate-[0deg]`
               }
               group-hover:text-gray-800`}
                />
              </span>
            </a>

            <a
              onMouseOver={() => setMenuActive('solution')}
              onMouseLeave={() => setMenuActive('')}
              href=''
              className='group flex items-center gap-2 text-[18px] font-[500] text-gray-400 hover:text-gray-800'
            >
              Solutions
              <span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`text-gray-400 transition-all
               ${
                 menuActive === 'solution'
                   ? ` rotate-[-180deg]`
                   : `rotate-[0deg]`
               }
              group-hover:text-gray-800`}
                />
              </span>
            </a>
            <a
              href='#price'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Pricing
            </a>
            <a
              href='#price'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Docs
            </a>
            <a
              href='#price'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Blogs
            </a>
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
        <Product menu={menuActive} />
      </div>
    </header>
  );
};

export default Header;

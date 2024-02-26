import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import SideNav from '@/components/SideNav/SideNav';

const Header = () => {
  const [showSideNav, setSideNav] = useState<boolean>(false);

  const onAnchorClick = () => {
    setSideNav(false);
  };
  return (
    <header className='  h-[60px]  bg-white  '>
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] '>
        <div className=' hidden items-center justify-between py-3 lg:flex'>
          <div className='flex items-center gap-12 transition-all'>
            <a href='#' className='flex items-center gap-1 text-lg font-[600] '>
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
            <a
              href=''
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Solutions
            </a>
            <a
              href='#price'
              className='text-[18px] font-[500]  text-gray-400 hover:text-gray-800'
            >
              Pricing
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
          className='absolute left-5 top-3  text-black lg:hidden '
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

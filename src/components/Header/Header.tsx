import { FC, useState } from 'react';

const Header: FC<{ open: boolean; setOpen: (value: boolean) => void }> = ({
  open,
  setOpen,
}) => {
  return (
    <header className='  h-[60px]  bg-white py-3'>
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] px-4 '>
        <div className=' hidden items-center justify-between lg:flex'>
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
        <div className='flex h-[40px] items-center justify-between px-4 lg:hidden'>
          <a href='#' className='flex items-center gap-1 text-lg font-[600] '>
            <img src='/images/formbit-logo.png' className='w-[100px]' alt='' />
          </a>

          <div
            className='flex flex-col items-start justify-center gap-2  transition-all delay-200 ease-in-out '
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div
              className={`h-1 w-8
             
              ${
                open
                  ? `  translate-y-[6px] rotate-[-45deg]`
                  : ` translate-y-[0px] rotate-[180deg]`
              } bg-gray-900`}
            ></div>
            <div
              className={`h-1 w-6  ${open ? ` hidden` : `flex`} bg-gray-900`}
            ></div>
            <div
              className={`h-1 w-8
              
              ${
                open
                  ? ` -translate-y-[6px] rotate-[45deg]`
                  : `-translate-y-[0px] rotate-[180deg]`
              } bg-gray-900`}
            ></div>
          </div>
          <div
            className={`top-60px fixed bottom-0 left-0 top-0 z-[200] min-h-screen w-[300px]  transition-all delay-100 ease-linear
          ${open ? `translate-x-[0px]` : `-translate-x-[100%]`}
      bg-black shadow-slate-600`}
          >
            <div className=' flex h-[60px] w-full items-center justify-start   bg-gray-100  px-4'>
              <a
                href='#'
                className='flex items-center gap-1 text-lg font-[600] '
              >
                <img
                  src='/images/formbit-logo.png'
                  className='w-[100px]'
                  alt=''
                />
              </a>
            </div>
            <div className='flex flex-col items-start justify-center gap-8 px-4 py-8'>
              <a
                href='#'
                className='text-xl font-[600]  text-white'
                onClick={() => setOpen(false)}
              >
                Product
              </a>
              <a
                href='#'
                className='text-xl font-[600]  text-white'
                onClick={() => setOpen(false)}
              >
                Solutions
              </a>
              <a
                href='#price'
                className='text-xl font-[600]  text-white'
                onClick={() => setOpen(false)}
              >
                Pricing
              </a>
            </div>
            <div className='absolute  bottom-[20px] left-0 right-0 z-40 flex flex-col items-center justify-center gap-5 px-4'>
              <a
                href=''
                className='flex h-[40px] w-full items-center justify-center rounded-lg bg-white text-[18px]  font-[500] text-black '
              >
                Customer Login
              </a>
              <button className='flex h-[40px] w-full items-center justify-center rounded-lg    bg-white text-center  text-lg font-[500] text-black shadow-lg'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

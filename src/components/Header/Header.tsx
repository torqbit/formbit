import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className='  h-[60px]  bg-white py-3'>
      <div className='mx-auto my-0  h-[60px] max-w-[1200px] px-4 '>
        <div className=' hidden items-center justify-between lg:flex'>
          <div className='flex items-center gap-12 transition-all'>
            <a href='#' className='flex items-center gap-1 text-lg font-[600] '>
              <div>FORM</div>
              <div className='flex h-[30px] w-full items-center justify-center rounded-lg bg-black px-2 py-1 text-center font-[500] text-white shadow-lg '>
                BIT
              </div>
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
            <div>FORM</div>
            <div className='flex h-[30px] w-full items-center justify-center rounded-lg bg-black px-2 py-1 text-center font-[500] text-white shadow-lg '>
              BIT
            </div>
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
            className={`absolute bottom-0 left-0 transition-all delay-100 ease-linear
          ${open ? `translate-x-[0px]` : `-translate-x-[100%]`}
          right-[145px] z-40 h-full bg-black shadow-slate-600`}
          >
            <div className=' flex h-[60px] w-full items-center justify-start   bg-white  px-4'>
              <a
                href='#'
                className='flex items-center gap-1 text-lg font-[600] '
              >
                <div>FORM</div>
                <div className='flex h-[30px] w-[70px] items-center justify-center rounded-lg bg-black px-2 py-1 text-center font-[500] text-white shadow-lg '>
                  BIT
                </div>
              </a>
            </div>
            <div className='flex flex-col items-start justify-center gap-8 px-4 py-8'>
              <a href='#' className='text-xl font-[600]  text-white'>
                Product
              </a>
              <a href='#' className='text-xl font-[600]  text-white'>
                Solutions
              </a>
              <a href='#' className='text-xl font-[600]  text-white'>
                Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

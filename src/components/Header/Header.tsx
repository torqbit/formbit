const Header = () => {
  return (
    <header className='  bg-white py-2'>
      <div className='mx-auto my-0 flex h-[50px] max-w-[1200px] items-center justify-between'>
        <div className='flex items-center gap-12'>
          <a href='' className='flex items-center gap-1 text-lg font-[600] '>
            <div>FORM</div>
            <div className='flex h-[30px] w-full items-center justify-center rounded-lg bg-black px-2 py-1 text-center font-[500] text-white shadow-lg'>
              BIT
            </div>
          </a>
          <a href='' className='text-[18px] font-[500] text-gray-400'>
            Product
          </a>
          <a href='' className='text-[18px] font-[500]  text-gray-400'>
            Solutions
          </a>
          <a href='' className='text-[18px] font-[500]  text-gray-400'>
            Pricing
          </a>
        </div>
        <div className='flex items-center gap-5'>
          <a href='' className='text-[18px] font-[500]  text-gray-600'>
            Customer Login
          </a>
          <button className='flex h-[35px] w-[100px] items-center justify-center rounded-lg  bg-black   text-center font-[500] text-white shadow-lg'>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

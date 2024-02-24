const Header = () => {
  return (
    <header className=' py-10'>
      <div className='mx-auto my-0 flex h-[50px] max-w-[1200px] items-center justify-between'>
        <div className='flex items-center gap-12'>
          <a href='' className='text-lg font-[600] tracking-widest'>
            <span className=' font-[800] text-red-600 '>/</span> RAREBLOCKS
          </a>
          <a href='' className='text-[18px] font-[500] text-gray-700'>
            Features
          </a>
          <a href='' className='text-[18px] font-[500]  text-gray-700'>
            Pricing
          </a>
          <a href='' className='text-[18px] font-[500]  text-gray-700'>
            Automation
          </a>
        </div>
        <div className='flex items-center gap-5'>
          <a href='' className='text-[18px] font-[500]  text-gray-700'>
            Customer Login
          </a>
          <button className='h-[50px] w-[100px] rounded-lg bg-black text-center font-[500] text-white shadow-lg'>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

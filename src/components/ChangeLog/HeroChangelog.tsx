import Link from 'next/link';

const HeroChangelog = () => {
  return (
    <section className='  h-full  bg-[#eee] pb-10 pt-20 md:min-h-[300px] lg:pb-20 lg:pt-40 '>
      <div className=' mx-auto my-0 flex max-w-[1200px]  items-center  justify-center  px-8 lg:px-0 '>
        <div>
          <h2 className='text-4xl leading-relaxed'>Changelog</h2>
          <p className='text-lg text-[#666]'>
            New updates and improvements to Formbit.
          </p>
          <div className='flex items-center gap-1 py-2 text-[#888] md:text-lg'>
            <Link className='transition-all hover:text-[#666]' href={''}>
              Subscribe to updates
            </Link>
            <span>.</span>
            <Link className='transition-all hover:text-[#666]' href={''}>
              Follow us on Twitter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroChangelog;

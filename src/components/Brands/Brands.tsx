const Brands = () => {
  const brands = [
    '/images/logos/flexport.png',
    '/images/logos/stripe.png',
    '/images/logos/asana.png',
    '/images/logos/spotify.png',
    '/images/logos/standford.png',
    '/images/logos/catch.png',
    '/images/logos/check.png',
    '/images/logos/zapier.png',
    '/images/logos/circleci.png',
    '/images/logos/abstract.png',
    '/images/logos/twitch.png',
    '/images/logos/hatch.png',
  ];
  return (
    <section className='bg-white  py-10'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-center  px-8 text-center  '>
        <p className='pb-8 text-center text-lg text-[#666] lg:font-[600]'>
          Join 100+ companies using Formbit
        </p>

        <div className='grid grid-cols-2 items-center justify-between gap-8 gap-x-28  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {brands.map((brand, i) => {
            return (
              <div key={i}>
                <img src={brand} alt='' className='object-cover ' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;

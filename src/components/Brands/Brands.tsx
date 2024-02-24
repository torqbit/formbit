const Brands = () => {
  const brands = [
    '100+ Big brands trust us',
    'VERTEX',
    'SquareStone',
    'martino',
    'waverio',
  ];
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto my-0 max-w-[1200px]'>
        <div className='flex items-center justify-between'>
          {brands.map((brand, i) => {
            return (
              <div key={i} className='text-xl '>
                {brand}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const Works = () => {
  const steps = [
    {
      number: 1,
      description: 'Sign up for creating your first online store  with ease.',
    },
    {
      number: 2,
      description: 'Add your products to your store and customize.',
    },
    {
      number: 3,
      description: 'Sell and earn as much as you can. Grow fast.',
    },
  ];
  return (
    <section className='bg-gray-100 py-20'>
      <div className='mx-auto my-0 max-w-[1200px]'>
        <h1 className='py-4 text-center text-5xl font-[600]'>How it works</h1>
        <p className='text-center text-lg font-[600] text-gray-700'>
          With lots of unique blocks, you can easily build a page <br /> without
          coding. Build your next landing page.
        </p>
        <div className='item-center flex  justify-between py-20'>
          {steps.map((step, i) => {
            return (
              <div
                className={`w-[360px] rounded-lg
                border-[2px] border-gray-600 border-opacity-20
              ${i === 0 || i === 2 ? ` ` : `gradient-box-shadow   `}
              bg-white p-10`}
              >
                <div className='mb-4 w-[60px] rounded-lg bg-black p-4 text-center text-lg font-[600] text-white'>
                  {step.number}
                </div>
                <p className='max-w-[270px] text-xl font-[600] text-gray-700'>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;

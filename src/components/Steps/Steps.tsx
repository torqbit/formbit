import { useState } from 'react';

const Steps = () => {
  const [active, setActive] = useState<string>('');
  const steps = [
    {
      num: 1,
      description: 'Sign up for creating your first form',
      name: 'sign',
    },
    {
      num: 2,
      description: 'Create a survey form or a quiz or feedback form',
      name: 'create',
    },
    {
      num: 3,
      description: 'Pbulish it and make it accessible for your clients',
      name: 'publish',
    },
  ];
  return (
    <section className='  overflow-hidden bg-gray-50 py-20'>
      <div className='mx-auto my-0 max-w-[1200px] px-4 '>
        <h1 className=' py-4 text-center text-4xl font-[600] lg:text-6xl '>
          How it works
        </h1>
        <div className='flex w-full items-center justify-center'>
          <p className='flex max-w-[400px]  text-center text-xl font-[600] text-gray-700 md:max-w-[500px] lg:max-w-[800px] lg:px-0'>
            With lots of templates, you can easily build a quiz, a feedback,
            contact, survey forms in just few minutes
          </p>
        </div>
        <div className=' z-40 flex  w-full flex-col  items-center lg:flex-row   lg:gap-5 '>
          {steps.map((step, i) => {
            return (
              <div>
                <div
                  onMouseOver={() => {
                    setActive(step.name);
                  }}
                  onMouseLeave={() => {
                    setActive('');
                  }}
                  key={i}
                  className={`relative z-20 mt-8 h-[200px]  w-full cursor-pointer rounded border-2 border-gray-400 border-opacity-40
                bg-white
              
                p-8 transition-all lg:m-0  lg:mt-16  `}
                >
                  <div className='item-center flex  w-10 justify-center rounded bg-black text-lg font-[600] text-white'>
                    {step.num}
                  </div>
                  <p className='max-w-[300px] py-4 text-lg font-[600] text-gray-400'>
                    {step.description}
                  </p>
                </div>
                {active === step.name && (
                  <div className='relative z-0 -mt-[200px] h-[200px] w-full rounded-lg   bg-gradient-to-r  from-[#f2b5d4]  via-pink-200 to-[#7bdff2]   opacity-75 blur '></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;

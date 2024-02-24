import { useState } from 'react';

const Steps = () => {
  const [className, setClass] = useState<string>('');
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
    <section className='bg-gray-50 py-20'>
      <div className='mx-auto my-0 max-w-[1200px]'>
        <h1 className=' py-4 text-center text-6xl font-[600] '>How it works</h1>
        <p className='text-center text-xl font-[600] text-gray-700'>
          With lots of templates, you can easily build a <br /> quiz, a
          feedback, contact, survey forms in just <br /> few minutes
        </p>
        <div className='relative z-40 flex items-center gap-5 '>
          {steps.map((step, i) => {
            return (
              <div
                onMouseOver={() => {
                  setClass(step.name);
                }}
                onMouseLeave={() => {
                  setClass('');
                }}
                key={i}
                className={` mt-16 h-[200px] w-[400px] cursor-pointer rounded
                transition-all
                ${
                  step.num === 2
                    ? `
                    ${className}
                `
                    : ``
                }
                border-2 border-gray-400 border-opacity-40  bg-white p-8 `}
              >
                <div className='item-center flex  w-10 justify-center rounded bg-black text-lg font-[600] text-white'>
                  {step.num}
                </div>
                <p className='max-w-[300px] py-4 text-lg font-[600] text-gray-400'>
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

export default Steps;

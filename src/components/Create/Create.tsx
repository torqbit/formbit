const Create = () => {
  const options = [
    {
      img: '/images/create.png',
      title: 'Create, publish and manage multiple forms',
      description:
        'With workspaces, you get to manage diverse set of applications for different departments in your organisation.',
    },
    {
      img: '/images/create.png',
      title: 'Create forms with different themes',
      description: `You can create forms with different themes to make it's look and feel match your brand, giving your unsers an amazing experience.`,
    },
  ];
  return (
    <section className='bg-gray-100 py-20'>
      <div className='mx-auto my-0  max-w-[1200px] '>
        <div className=' flex items-start justify-between pb-20'>
          <div className='py-8'>
            <h4 className='text-xl font-[600]'>CREATE</h4>
            <h1 className='py-6  text-5xl font-[600]'>
              The most engaging forms <br /> with just few clicks
            </h1>
            <p className=' text-lg font-[600] text-gray-700 '>
              Formbit is a software to build creative and interactive forms{' '}
              <br /> like quiz, polls and surveys that helps you connect with
              your <br /> students, employees and clients in a fresh, innovative
              way.
            </p>
          </div>
          <div>
            <img
              src='/images/tools-illustration.svg'
              alt=''
              className=' object-cover'
            />
          </div>
        </div>
        <div className='flex  items-start justify-between px-0  '>
          {options.map((option, i) => {
            return (
              <div key={i} className='w-[520px]  rounded bg-gray-200 pt-10'>
                <div className='px-16 '>
                  <img
                    src='/images/edit.svg'
                    alt=''
                    className='mb-4 h-10 w-10'
                  />
                  <h4 className='py-4'>{option.title}</h4>
                  <p className='max-w-[400px] pb-4 font-[600] text-gray-700'>
                    {option.description}
                  </p>
                </div>
                <div className='flex items-end justify-end'>
                  <img
                    src={option.img}
                    alt=''
                    className='mt-8 w-[520px] pl-8'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Create;

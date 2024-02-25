const Create = () => {
  const options = [
    {
      img: '/images/create.png',
      title: 'Create, publish and manage multiple forms',
      logo: '/images/edit.svg',
      description:
        'With workspaces, you get to manage diverse set of applications for different departments in your organisation.',
    },
    {
      img: '/images/create.png',
      title: 'Create forms with different themes',
      logo: '/images/templates.svg',

      description: `You can create forms with different themes to make it's look and feel match your brand, giving your unsers an amazing experience.`,
    },
  ];
  return (
    <section className='bg-gray-100 py-20'>
      <div className='mx-auto my-0  max-w-[1200px] px-4'>
        <div className=' flex flex-col items-center justify-between pb-20 lg:flex-row lg:items-start'>
          <div className='py-8'>
            <h4 className='text-center text-2xl font-[600] lg:text-left'>
              CREATE
            </h4>
            <h1 className='py-6  text-center text-3xl font-[600] lg:text-start lg:text-5xl'>
              The most engaging forms <br /> with just few clicks
            </h1>
            <p className=' max-w-[400px] text-center text-lg font-[600] text-gray-700 md:max-w-[500px] lg:max-w-[800px] lg:text-start '>
              Formbit is a software to build creative and interactive forms like
              quiz, polls and surveys that helps you connect with your students,
              employees and clients in a fresh, innovative way.
            </p>
          </div>
          <div>
            <img
              src='/images/tools-illustration.svg'
              alt=''
              className=' h-[300px] object-cover md:h-[400px]  lg:h-full'
            />
          </div>
        </div>
        <div className='flex  flex-col items-center gap-y-8 px-4 lg:flex-row lg:items-start lg:justify-between lg:px-0  '>
          {options.map((option, i) => {
            return (
              <div
                key={i}
                className='w-full rounded  bg-gray-200 pt-10 lg:w-[520px]'
              >
                <div className='px-16 '>
                  <img src={option.logo} alt='' className='mb-4 h-10 w-10' />
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

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
      img: '/images/template-form.png',
      title: 'Create forms with different themes',
      logo: '/images/templates.svg',

      description: `You can create forms with different themes to make it's look and feel match your brand, giving your unsers an amazing experience.`,
    },
  ];
  return (
    <section className='bg-gray-100 py-20'>
      <div className='mx-auto my-0  max-w-[1200px] px-8'>
        <div className=' flex flex-col items-center justify-between pb-20 lg:flex-row lg:items-start'>
          <div className='py-8'>
            <h4 className='text-left text-xl lg:text-center lg:text-2xl lg:font-[600] '>
              CREATE
            </h4>
            <h1 className='py-6  text-left text-2xl lg:text-center lg:text-5xl  lg:font-[600]'>
              The most engaging forms <br /> with just few clicks
            </h1>
            <p className=' max-w-[400px] text-left text-lg text-[#666] md:max-w-[500px] lg:max-w-[500px] lg:text-center lg:font-[400] '>
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
        <div className='flex  flex-col items-center gap-y-8  lg:flex-row lg:items-start lg:justify-between lg:px-0  '>
          {options.map((option, i) => {
            return (
              <div
                key={i}
                className='w-full rounded  bg-gray-200 pt-5 lg:w-[520px]'
              >
                <div className='px-8 lg:px-12 '>
                  <img src={option.logo} alt='' className='mb-2 h-10 w-10' />
                  <h4 className='py-4'>{option.title}</h4>
                  <p className='max-w-[400px] pb-2 text-[#666] lg:font-[400]'>
                    {option.description}
                  </p>
                </div>
                <div className='flex items-end justify-end'>
                  <img
                    src={option.img}
                    alt=''
                    className='mt-4  w-full pl-8 lg:pl-12'
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

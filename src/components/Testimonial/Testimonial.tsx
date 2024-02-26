const Testimonial = () => {
  const testimonialInfo = [
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
    {
      img: '',
      title: 'Ken',
      post: 'Founder of Tabla.io',
      description:
        'Formbit is dead simple, when it comes to creating amazing forms for our customers. I would love to recommend this product to my friends, anytime. I definetely plan to use it my other projects.',
    },
  ];
  return (
    <section className='  overflow-hidden bg-gray-200 py-10'>
      <div className='mx-auto my-0 max-w-[1200px] px-4 '>
        <h1 className='text-center text-xl font-[600] text-gray-400 md:text-2xl lg:text-left lg:text-3xl'>
          Loved By <span className='text-gray-900'>Customers</span>
        </h1>
        <div className='grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonialInfo.map((info, i) => {
            return (
              <div
                key={i}
                className={`rounded bg-gray-50 p-4 ${i === 1 && `mb-4`} ${
                  i === 1 || i === 4
                    ? `h-[210px] lg:h-[280px]`
                    : `h-[210px] lg:h-[250px]`
                }`}
              >
                <div className='flex items-center gap-4 pb-4'>
                  <div className='h-[60px] w-[60px] rounded-[50%] bg-gray-400'></div>
                  <div>
                    <h4 className='text-lg font-[600] text-gray-900'>
                      {info.title}
                    </h4>
                    <p className='text-sm font-[600] text-gray-400'>
                      {info.post}
                    </p>
                  </div>
                </div>
                <p className='text-sm font-[600] leading-relaxed text-gray-400'>
                  {info.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

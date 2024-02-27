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
    <section className='  h-full overflow-hidden bg-gray-200 py-10'>
      <div className='mx-auto my-0 max-w-[1200px] px-8 '>
        <h1 className='text-left text-xl text-[#666] md:text-2xl lg:text-center lg:text-3xl lg:font-[600]'>
          Loved By <span className='text-gray-900'>Customers</span>
        </h1>
        <div className=' columns-1 gap-x-5 pt-10 sm:columns-2 lg:columns-3 lg:gap-x-10'>
          {testimonialInfo.map((info, i) => {
            return (
              <div
                onClick={() => console.log(i)}
                key={i}
                className={` mb-5 w-full  rounded bg-gray-50 p-4 lg:mb-10
                
                ${
                  i === 2 || i === 3
                    ? `aspect-auto  sm:aspect-square lg:h-[284px] `
                    : `aspect-auto sm:aspect-[3/2] lg:aspect-[5] lg:h-[260px]`
                }`}
              >
                <div className='flex items-center gap-4 pb-4'>
                  <div className='h-[60px] w-[60px] rounded-[50%] bg-[#666]'></div>
                  <div>
                    <h4 className='text-lg text-gray-900 lg:font-[600]'>
                      {info.title}
                    </h4>
                    <p className='text-sm text-[#666] lg:font-[600]'>
                      {info.post}
                    </p>
                  </div>
                </div>
                <p className='text-sm leading-relaxed text-[#666] lg:font-[600]'>
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

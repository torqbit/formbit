import { FC, ReactNode } from 'react';

const View: FC<{
  title: string;
  description: string;
  viewData: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}> = ({ title, description, viewData }) => {
  return (
    <section className='  h-full  bg-[#eee] py-2 lg:py-20'>
      <div className=' mx-auto my-0   max-w-[1200px]  px-8 '>
        <div className=' w-full  py-4 text-left lg:text-center'>
          <h1 className='py-4 text-left text-3xl text-black lg:text-center'>
            {title}
          </h1>
          <div className='flex items-center justify-center'>
            <p className='max-w-[600px]  text-lg text-[#666]'>{description}</p>
          </div>
        </div>
        <div className='flex w-full flex-col items-start justify-center gap-2 pt-4 lg:flex-row lg:gap-16'>
          {viewData.map((data, i) => {
            return (
              <div
                key={i}
                className='place-content-center  py-4 lg:min-h-[250px]'
              >
                <div className='mb-8 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#fff]  shadow-xl'>
                  {data.icon}
                </div>
                <div>
                  <h4 className='pb-4 text-xl text-black'>{data.title}</h4>
                  <p className='max-w-[400px] text-sm text-[#666]'>
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default View;

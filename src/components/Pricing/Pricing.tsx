import { faCheck, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = () => {
  const packages = [
    ['Unlimited members', '3 admin accounts', '100GB storage'],
    ['Custom domain', 'API access', 'Bulk importer'],
  ];
  return (
    <section className='relative z-10 bg-gray-50 py-20' id='price'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center gap-10 px-4 '>
        <h1 className=' py-4 text-center text-3xl font-[600] lg:max-w-[800px] lg:text-6xl '>
          All features for one price. Try Formbit for free!
        </h1>
        <div className=' relative z-20 flex h-[400px] w-full flex-col justify-between rounded-[15px] bg-black  p-16 sm:h-[250px]   sm:flex-row  md:w-[800px] md:flex-row  lg:w-[1000px]'>
          {packages.map((items, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-3 items-center justify-center gap-8 sm:flex sm:flex-col  sm:gap-8 lg:items-start'
              >
                {items.map((item, i) => {
                  return (
                    <a
                      key={i}
                      href=''
                      className='flex items-center gap-2 text-[14px] text-white sm:items-center md:text-lg'
                    >
                      <FontAwesomeIcon icon={faCheck} size='sm' /> {item}
                    </a>
                  );
                })}
              </div>
            );
          })}
          <div className='priceDivider w-[20px] skew-x-[-10deg] bg-black bg-[length:10px_7px] bg-repeat  '></div>
          <div>
            <div className='flex items-end justify-center gap-1 pb-4 sm:justify-normal'>
              <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faDollar} size='4x' color='white' />
                <span className=' text-5xl text-white'> 19</span>
              </div>
              <span className=' pb-2 text-lg font-[600] text-gray-600'>
                / months
              </span>
            </div>
            <button className='mt-6 flex h-[40px] w-full items-center justify-center rounded-xl bg-white px-4 font-[600] text-gray-800 transition-all hover:bg-gray-600 hover:text-white hover:shadow-lg hover:shadow-gray-900 sm:mt-0  lg:h-[50px] lg:w-[200px]'>
              Get started now
            </button>
          </div>
        </div>
        <div className='relative z-10    -mt-[445px] h-[420px] w-full rounded-lg bg-gradient-to-r from-[#f2b5d4]  via-pink-200 to-[#7bdff2] opacity-75 blur sm:-mt-[295px] sm:h-[265px]  md:w-[800px] lg:w-[1015px] '></div>
      </div>
    </section>
  );
};

export default Pricing;

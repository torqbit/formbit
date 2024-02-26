import { faCheck, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = () => {
  const packages = [
    ['Unlimited members', '3 admin accounts', '100GB storage'],
    ['Custom domain', 'API access', 'Bulk importer'],
  ];
  return (
    <section className='relative z-10 bg-gray-50 py-20' id='price'>
      <div className='mx-auto my-0 flex max-w-[1200px] flex-col items-center justify-center gap-10'>
        <h1 className=' py-4 text-center text-6xl font-[600] '>
          All features for one price. Try <br /> Formbit for free!
        </h1>
        <div className='boxPrice flex w-[900px] justify-between  gap-x-10 rounded-[15px] bg-black p-16'>
          {packages.map((items, i) => {
            return (
              <div key={i} className='flex flex-col gap-8'>
                {items.map((item, i) => {
                  return (
                    <a
                      key={i}
                      href=''
                      className='flex items-center gap-2 text-white'
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
            <div className='flex items-center '>
              <FontAwesomeIcon icon={faDollar} size='4x' color='white' />
              <span className='text-5xl text-white'> 19</span>
              <span className='pt-6 text-lg font-[600] text-gray-600'>
                /months
              </span>
            </div>
            <button className='mt-6 flex h-[50px] w-[200px] items-center justify-center rounded-xl bg-white font-[600] text-gray-800'>
              Get started now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

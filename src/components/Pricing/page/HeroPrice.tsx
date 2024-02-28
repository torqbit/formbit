import {
  faCheckCircle,
  faDollar,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const HeroPrice = () => {
  const [active, setActive] = useState<string>('annual');
  const priceData = [
    {
      mode: 'starter',
      monthlyPrice: 'FREE',
      yearlyPrice: 'FREE',

      type: 'FREE',
      plans: [
        {
          title: 'Starter plan includes:',
          plan: [
            'Up to 25 blocks',
            'Up to 3 editors',
            'Up to 2 dashboards',
            '1 connection',
            'Unlimited viewers',
          ],
        },
      ],
    },
    {
      mode: 'Pro',
      monthlyPrice: 10,
      yearlyPrice: 8,
      type: '',
      plans: [
        {
          title: 'Everything on Starter plus:',
          plan: [
            'Unlimited blocks',
            'Unlimited editors',
            'Unlimited dashboards',
            '50 alerts',
            '30 day version history',
          ],
        },
      ],
    },
    {
      mode: 'Premier',
      monthlyPrice: 25,
      yearlyPrice: 20,
      type: '',
      plans: [
        {
          title: 'Everything on Pro plus:',
          plan: [
            'Advanced permissions',
            'Early access to features',
            'Unlimited alerts',
            'Unlimited version history',
          ],
        },
      ],
    },
    {
      mode: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      type: '',
      plans: [
        {
          title: 'Everything on Premier plus:',
          plan: [
            'Data catalog',
            'Audit logs',
            'SAML-based SSO',
            'Dedicated support      ',
          ],
        },
      ],
    },
  ];

  return (
    <section className='bg-gray-100 py-20'>
      <div className='mx-auto my-0   max-w-[1200px] px-8 lg:px-0'>
        <h1 className='py-4 text-center text-4xl font-[600] text-black lg:text-6xl'>
          Pricing
        </h1>
        <div className='flex w-full items-center justify-center'>
          <p className='text-center text-lg text-[#666] lg:max-w-[500px] lg:text-xl'>
            Build on Formbit for free with your entire company. Upgrade for
            unlimited dashboards, editors, connections and dedicated enterprise
            features.
          </p>
        </div>
        <div className='flex cursor-pointer items-center justify-center py-8'>
          <div
            onClick={() => setActive('month')}
            className={`flex w-[170px] items-center justify-center rounded-l-[25px] px-4 py-2  text-sm text-[#666]
            ${
              active === 'month'
                ? `h-[41px] border   bg-white shadow-lg`
                : `h-[40px] border-b-4 border-l-4 border-gray-200 bg-gray-50 shadow-md`
            }
            delay-70 transition-all`}
          >
            Monthly
          </div>
          <div
            onClick={() => setActive('annual')}
            className={`flex w-[170px] items-center justify-center rounded-r-[25px] px-4 py-2  text-sm text-[#666]
            ${
              active === 'annual'
                ? `h-[41px] border   bg-white shadow-lg`
                : `h-[40px] border-b-4 border-r-4 border-gray-200 bg-gray-50 shadow-md`
            }
            delay-70 flex items-center justify-center gap-x-2 transition-all`}
          >
            Annually{' '}
            <span className='min-w-[75px] rounded-r-[15px] bg-gray-200 px-2  text-center text-[10px] '>
              save 20%
            </span>
          </div>
        </div>
        <div
          className={`
        grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4
        `}
        >
          {priceData.map((data, i) => {
            return (
              <div
                key={i}
                className={` w-full rounded-xl border-t-[8px]  
                ${
                  data.mode === 'Enterprise'
                    ? `border-[#4d4d4db8] bg-[#242120] `
                    : `border-gray-200 bg-white `
                }
                 shadow-2xl`}
              >
                <div
                  className={`
                  mb-4
                ${
                  data.mode === 'Enterprise'
                    ? ` rounded-b-[0px] rounded-t-[15px] border-b-[3px]  border-opacity-10 bg-[#201e1d] p-6  `
                    : `mx-6 border-b-2  border-dotted py-6 `
                }
                border-gray-400`}
                >
                  <div className='flex  items-center gap-2 pb-4 text-xl text-[#666]'>
                    {data.mode}
                    {data.mode === 'Pro' && (
                      <div className='flex items-center justify-center gap-2 rounded-[25px] bg-red-400 px-4 py-1 text-sm text-white'>
                        <FontAwesomeIcon
                          icon={faFire}
                          size='sm'
                          color='white'
                        />
                        Popular
                      </div>
                    )}
                  </div>
                  <div
                    className={`flex 
                ${data.mode === 'Enterprise' ? `text-white` : `text-[#666]`}
                  
                  items-center gap-1 pb-4`}
                  >
                    <FontAwesomeIcon
                      icon={faDollar}
                      size='2x'
                      className={`
                ${data.mode === 'Enterprise' ? `text-white` : `text-black`}
                `}
                    />
                    <div
                      className={`flex items-end gap-2  text-3xl font-[600]
                    
                ${data.mode === 'Enterprise' ? `text-white` : `text-black`}
                    
                    `}
                    >
                      {active === 'month' && data.monthlyPrice}
                      {active === 'annual' && data.yearlyPrice}
                      {data.monthlyPrice != 'FREE' &&
                        data.monthlyPrice != 'Custom' && (
                          <span className='text-sm text-[#666]'>
                            editor / mo
                          </span>
                        )}
                    </div>
                  </div>

                  <button
                    className={`
                ${data.mode === 'Pro' && `bg-[#242120] text-white`}
                mb-6 flex h-[40px] w-full items-center justify-center rounded-[15px] bg-gray-100 px-4 py-2 text-sm font-[600] text-[#666] shadow-md
                `}
                  >
                    Get started with {data.mode}
                  </button>
                </div>

                {data.plans.map((plan, i) => {
                  return (
                    <ul key={i}>
                      <li
                        className={`p-6 text-lg 
                ${data.mode === 'Enterprise' ? `text-white` : `text-[#666]`}
                      
                      `}
                      >
                        {plan.title}
                      </li>
                      <div>
                        {plan.plan.map((opt, i) => {
                          return (
                            <li
                              key={i}
                              className={`flex  px-6
                ${data.mode === 'Enterprise' ? ` text-white` : `text-[#666]`}
                              
                              items-center gap-2 pb-4 `}
                            >
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={`
                ${data.mode === 'Enterprise' ? `text-white` : `text-[#666]`}
                `}
                                size='sm'
                              />
                              <div>{opt}</div>
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HeroPrice;

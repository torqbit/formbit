import {
  faBowlFood,
  faBoxOpen,
  faBuilding,
  faBus,
  faCalendar,
  faCamera,
  faDumbbell,
  faGift,
  faGraduationCap,
  faHospital,
  faHotel,
  faKitMedical,
  faMoneyBill,
  faPiggyBank,
  faRightLong,
  faSchool,
  faShop,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { FC } from 'react';
import Link from 'next/link';

const Solution: FC<{ menu: string }> = ({ menu }) => {
  const Stage = [
    {
      icon: <FontAwesomeIcon icon={faBuilding} />,
      name: 'School',
      href: '/school',
    },
    {
      icon: <FontAwesomeIcon icon={faUniversity} />,
      name: 'University',
      href: '/university',
    },
  ];

  const UseCase = [
    {
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
      name: 'Bank',
      href: '/bank',
    },
    {
      icon: <FontAwesomeIcon icon={faHospital} />,
      name: 'Hospital',
      href: '/hospital',
    },
    {
      icon: <FontAwesomeIcon icon={faShop} />,
      name: 'Shop',
      href: '/shop',
    },
    {
      icon: <FontAwesomeIcon icon={faDumbbell} />,
      name: 'Gym',
      href: '/gym',
    },
    {
      icon: <FontAwesomeIcon icon={faBus} />,
      name: 'Travel Service',
      href: '/travel',
    },

    {
      icon: <FontAwesomeIcon icon={faHotel} />,
      name: 'Hotel',
      href: '/hotel',
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBill} />,
      name: 'Agencies',
      href: '/agencies',
    },
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      name: 'Event planner',
      href: '/event',
    },
    {
      icon: <FontAwesomeIcon icon={faBowlFood} />,
      name: 'Restaurants',
      href: '/restaurant',
    },
    {
      icon: <FontAwesomeIcon icon={faCamera} />,
      name: 'Social Media',
      href: '/social',
    },
  ];

  return (
    <>
      <section
        className={`absolute left-40 z-20 m-auto ml-[180px] mt-[2px] w-[525px] rounded-lg bg-white  p-9 `}
      >
        <div>
          <h3 className='mb-0 text-[18px] font-medium uppercase text-[#666]'>
            For Education
          </h3>

          <div className='flex  w-[415px] cursor-pointer justify-between  '>
            {Stage.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline justify-between  text-[#666]
 hover:text-[#000]'
                    >
                      <a className='h-[16px] w-[16px]'>{item.icon}</a>
                      <h1 className='ml-2 text-[16px] font-normal '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
          <div className='mb-2 ml-[-30px] mt-3 w-[520px] overflow-hidden	 border-b-2 border-dashed' />
          <h3 className=' mt-6  text-[18px] font-medium uppercase text-[#666]'>
            For Businesses
          </h3>
          <div className='grid w-[450px] cursor-pointer grid-flow-col grid-rows-5 justify-between gap-[-10px]'>
            {UseCase.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                    >
                      <a className='h-[16px] w-[16px]'>{item.icon}</a>
                      <h1 className='pl-3 text-[16px] font-normal '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Solution;

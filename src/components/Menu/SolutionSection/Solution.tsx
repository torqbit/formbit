import {
  faAddressBook,
  faBoxOpen,
  faChalkboardUser,
  faComputer,
  faDatabase,
  faDesktop,
  faDiagramNext,
  faFaceFrown,
  faFish,
  faGear,
  faGift,
  faRectangleTimes,
  faRightLong,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { FC } from 'react';

const Solution: FC<{ menu: string }> = ({ menu }) => {
  const Stage = [
    {
      icon: <FontAwesomeIcon icon={faComputer} />,
      name: 'Front-end Developer',
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} />,
      name: 'Back-end Developer',
    },
  ];

  const UseCase = [
    {
      icon: <FontAwesomeIcon icon={faRectangleTimes} />,
      name: 'React',
    },
    {
      icon: <FontAwesomeIcon icon={faDiagramNext} />,
      name: 'Next.JS',
    },
    {
      icon: <FontAwesomeIcon icon={faDesktop} />,
      name: 'CSS',
    },
    {
      icon: <FontAwesomeIcon icon={faShareNodes} />,
      name: 'Node.JS',
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardUser} />,
      name: 'Kubernetes',
    },
    {
      icon: <FontAwesomeIcon icon={faFish} />,
      name: 'Docker',
    },
    {
      icon: <FontAwesomeIcon icon={faFaceFrown} />,
      name: 'AWS',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      name: 'GCP',
    },
    {
      icon: <FontAwesomeIcon icon={faAddressBook} />,
      name: 'MYSQL',
    },
  ];
  const Integration = [
    {
      icon: <FontAwesomeIcon icon={faBoxOpen} />,
      name: 'Open Source',
      additionalIcon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          width='16'
          height='16'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
          />
        </svg>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faGift} />,
      name: 'Github discussions',
    },
    {
      icon: <FontAwesomeIcon icon={faRightLong} />,
      name: 'Career Guideline',
    },
  ];
  return (
    <>
      <section
        className={`absolute left-40 z-20 m-auto ml-[180px] mt-[2px] w-[700px] rounded-lg  bg-white p-2 `}
      >
        <div>
          <h3 className='mb-0 ml-6 mt-5 text-[18px] font-medium uppercase text-[#666]'>
            Role
          </h3>

          <div className='ml-7  flex w-[535px] cursor-pointer  justify-between  '>
            {Stage.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <div
                    className='flex  items-baseline	 justify-between  text-[#666]
 hover:text-[#000]'
                  >
                    <div className='mr-3 h-[16px] w-[16px]'>{item.icon}</div>
                    <h1 className='text-[16px] font-normal 	 '>{item.name}</h1>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='mb-2 mt-3 w-[700px] border-b-2 border-dashed' />
          <h3 className='ml-6 mt-6  text-[18px] font-medium uppercase text-[#666]'>
            Tools
          </h3>
          <div className='ml-6 grid w-[450px] cursor-pointer grid-flow-col grid-rows-5 justify-between gap-[-10px]'>
            {UseCase.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <div
                    className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                  >
                    <a className='mr-3 h-[16px] w-[16px]'>{item.icon}</a>
                    <h1 className=' text-[16px] font-normal '>{item.name}</h1>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
        </div>

        <div className='mt-4  rounded-lg bg-gray-100  p-8 '>
          <h3 className=' text-[18px] font-medium uppercase text-[#666]'>
            Resources
          </h3>
          <div className='grid w-[525px] cursor-pointer  grid-flow-col grid-rows-2 justify-between gap-[-20px]'>
            {Integration.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <div
                    className='flex items-baseline	  	
   text-[#666] hover:text-[#000]  '
                  >
                    <a className='mr-3 h-[16px] w-[16px]'>{item.icon}</a>
                    <h1 className='mr-3 text-[16px] font-normal '>
                      {item.name}
                    </h1>
                    <a>{item.additionalIcon}</a>
                  </div>
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

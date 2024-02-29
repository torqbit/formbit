import {
  faArrowRight,
  faCube,
  faDatabase,
  faLock,
  faMessage,
  faSave,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import { FC } from 'react';
export const menuList = [
  {
    icon: <FontAwesomeIcon icon={faDatabase} />,
    title: 'Database',
    description: 'Fully Portable Postgres database',
  },
  {
    icon: <FontAwesomeIcon icon={faLock} />,
    title: 'Authentication',
    description: 'User Managemnet out of the box',
  },
  {
    icon: <FontAwesomeIcon icon={faSave} />,
    title: 'Storage',
    description: 'Serverless storage for any media',
  },
  {
    icon: <FontAwesomeIcon icon={faTruckLoading} />,
    title: 'Edge Functions',
    description: 'Deploy code globally on the edge',
  },

  {
    icon: <FontAwesomeIcon icon={faMessage} />,
    title: 'Realtime',
    description: 'Synchronize and broadcast events',
  },
  {
    icon: <FontAwesomeIcon icon={faCube} />,
    title: 'Vector',
    description: 'AI toolkit to manage embeddings',
  },
];

const Product: FC<{ menu: string }> = ({ menu }) => {
  const customerstories = [
    {
      img: '',
      title:
        'Formbit migration drives shotgun to an 83% reduction in data infrastructure costs',
    },
    {
      img: '',
      title:
        'Formbit migration drives shotgun to an 83% reduction in data infrastructure costs',
    },
    {
      img: '',
      title:
        'Formbit migration drives shotgun to an 83% reduction in data infrastructure costs',
    },
  ];
  return (
    <div
      className={`fixed left-[200px] top-16 z-40 flex
    w-[800px] items-start justify-center rounded-lg bg-[#201e1d] transition-all `}
    >
      <div className='h-[520px] w-[400px] cursor-pointer border-r-2 border-[#3d3d3d] p-6'>
        {menuList.map((list, i) => {
          return (
            <div
              key={i}
              className='flex items-center justify-start gap-4 rounded-lg p-2 pb-4 hover:bg-[#3b3a3a]'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-[#100f0f] bg-opacity-50 text-gray-100'>
                {list.icon}
              </div>
              <div>
                <h4 className='pb-1 text-lg font-[500] text-white'>
                  {list.title}
                </h4>
                <p className='text-[15px] text-[#666]'>{list.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='h-[520px] w-[400px] rounded-lg bg-[#161616] p-6'>
        <a
          href=''
          className=' group cursor-pointer tracking-wider text-[#666] transition-all ease-in-out hover:text-white'
        >
          CUSTOM STORIES{' '}
          <FontAwesomeIcon
            icon={faArrowRight}
            //   className='
            // translate-x-[0px] hover:text-white group-hover:translate-x-[8px]
            // '
          />
        </a>
        <div className='py-4 '>
          {customerstories.map((stroy, i) => {
            return (
              <div key={i} className='flex items-center gap-4 py-2 '>
                <div className='flex h-14 w-32 items-center justify-center rounded-lg bg-[#3b3a3a] bg-opacity-50 text-gray-100'>
                  <img src={stroy.img} alt='' />
                </div>
                <p className='max-w-[280px] cursor-pointer text-[15px] text-[#666] hover:text-white'>
                  {stroy.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className='pt-4 text-[#666]'>COMPARE FORMBIT</div>
        <ul className='py-6 text-lg text-[#666]'>
          <li>Formbit vs Firbase</li>
          <li>Formbit vs Heroku</li>
          <li>Formbit vs AuthO</li>
        </ul>
      </div>
    </div>
  );
};
export default Product;

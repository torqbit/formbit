import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const options = [
    {
      title: 'COMPANY',
      links: [
        {
          title: 'About',
          href: '#',
        },
        {
          title: 'Features',
          href: '#',
        },
        {
          title: 'Works',
          href: '#',
        },
        {
          title: 'Career',
          href: '#',
        },
      ],
    },
    {
      title: 'HELP',

      links: [
        {
          title: 'Customer Support',
          href: '#',
        },
        {
          title: 'Delivery Details',
          href: '#',
        },
        {
          title: 'Terms & Conditions',
          href: '#',
        },
        {
          title: 'Privacy Policy',
          href: '#',
        },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        {
          title: 'Free eBooks',
          href: '#',
        },
        {
          title: 'Development Tutorial',
          href: '#',
        },
        {
          title: 'How to - Blog',
          href: '#',
        },
        {
          title: 'Youtube Playlist',
          href: '#',
        },
      ],
    },
  ];

  const socialIcons = [
    '/images/twitter-svgrepo-com.svg',
    '/images/facebook-svgrepo-com.svg',
    '/images/instagram-svgrepo-com.svg',
    '/images/github-svgrepo-com.svg',
  ];

  return (
    <footer className='overflow-hidden bg-gray-50 py-20'>
      <div className='mx-auto my-0 max-w-[1200px]'>
        <div className='flex items-center justify-start gap-1 pb-16 '>
          <div className='text-xl font-[600]'>FORM</div>
          <div className='flex h-[30px] w-[60px] items-center justify-center rounded-lg bg-black px-2 py-1 text-center font-[500] text-white shadow-lg'>
            BIT
          </div>
        </div>
        <div className='flex items-start justify-between border-b-2 border-gray-400 border-opacity-25 pb-8'>
          {options.map((opt, i) => {
            return (
              <ul key={i}>
                <li className='pb-4 text-xl font-[600] text-gray-700'>
                  {opt.title}
                </li>
                <div className='flex flex-col gap-4'>
                  {opt.links.map((link, i) => {
                    return (
                      <a
                        key={i}
                        className='cursor-pointer font-[500] text-gray-500'
                        href={link.href}
                      >
                        {link.title}
                      </a>
                    );
                  })}
                </div>
              </ul>
            );
          })}
          <div>
            <div className='pb-4 text-xl font-[600] text-gray-700'>
              SUBSCRIBE TO NEWSLETTER
            </div>
            <div className='flex  items-center justify-start py-6 '>
              <input
                type='text'
                placeholder='Enter email address'
                className='h-[50px] w-[300px] border-2 border-gray-400 border-opacity-50 bg-white px-4 text-black outline-none focus:border-none focus:outline-none active:border-none active:outline-none'
              />
              <button className='flex h-[50px] w-[100px] items-center justify-center rounded-xl rounded-bl-none rounded-tl-none   border-opacity-25 bg-black font-[600] text-white outline-none'>
                Join
              </button>
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-[18px] font-[600]'>
                <div className='text-gray-800'>CALL US</div>
                <a href='' className='text-lg text-gray-500'>
                  444-5555-555
                </a>
              </div>
              <div className='text-[18px] font-[600]'>
                <div className='text-gray-800'>EMAIL US</div>
                <a href='' className='text-lg text-gray-500'>
                  info@formbit.xyz
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between pt-10'>
          <div className='flex items-center gap-1 text-gray-600'>
            <FontAwesomeIcon icon={faCopyright} size='sm' color='black' />{' '}
            Copyright2021.All Rights Reserved
          </div>
          <div className='flex items-center gap-5'>
            {socialIcons.map((icon, i) => {
              return <img key={i} src={icon} alt='' className='h-6 w-6 ' />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

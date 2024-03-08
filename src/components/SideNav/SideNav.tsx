import { menuList } from '@/components/Menu/Product';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { animated, useSpring, useSpringRef, useTrail } from '@react-spring/web';
import { FC, useEffect, useState } from 'react';

const SideNav: FC<{
  isOpen: boolean;
  onAnchorClick: () => void;
  active: boolean;
  setActive: (value: boolean) => void;
}> = ({ isOpen, onAnchorClick, setActive, active }) => {
  const api = useSpringRef();

  const springs = useSpring({
    ref: api,
    from: { width: '0%' },
    config: { duration: 400 },
  });

  const items = ['Product', 'Solutions', 'Pricing', 'Docs', 'Blogs'];

  const trail = useTrail(5, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 450,
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    height: isOpen ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useEffect(() => {
    api.start({
      to: {
        width: isOpen ? '80%' : '0%',
      },
    });
  }, [isOpen]);

  return (
    <animated.div
      style={{
        backgroundColor: '#000',
        position: 'absolute',
        height: '100vh',
        zIndex: 1000,
        ...springs,
      }}
    >
      <div className='flex h-[60px] w-full items-center justify-start bg-white pl-4 '>
        <img
          height={40}
          style={{ padding: 20 }}
          src='/images/formbit-logo.png'
          alt='Torqbit logo'
        />
      </div>

      <div className='mt-16'>
        {trail.map(({ height, ...style }, index) => (
          <animated.div
            onClick={() => {
              items[index] !== 'Product' && onAnchorClick();
            }}
            key={index}
            className={`  

 ${items[index] === 'Product' && active ? `h-[460px]` : `h-full`}
          w-full overflow-hidden pl-10 text-[3em] font-[700] leading-[80px] tracking-[-0.05em] text-white transition-all will-change-[transform,opacity]`}
            style={style}
          >
            <animated.a
              className={'text-3xl'}
              href={`#${items[index]}`}
              style={{ height }}
            >
              {items[index] === 'Product' ? (
                <>
                  <div
                    className='flex items-center gap-4 '
                    onClick={() => {
                      setActive(!active);
                    }}
                  >
                    {items[index]}{' '}
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className=' rotate-90 text-[15px]'
                    />
                  </div>
                  {
                    <div
                      className={` mr-4 mt-2  transition-all  ${
                        active ? `h-full` : `h-[0px]`
                      } `}
                    >
                      <Menu as='div'>
                        <Transition
                          show={active}
                          enter=''
                          enterFrom='opacity-100 '
                          enterTo='opacity-100 '
                          leave=''
                          leaveFrom='opacity-100 '
                          leaveTo='opacity-100 '
                        >
                          <Menu.Items
                            className={` mr-4 transition-all  ${
                              active ? `h-full` : `h-[0px]`
                            } `}
                          >
                            <Menu.Item>
                              <div className=' h-full w-full cursor-pointer   py-2'>
                                {menuList.map((list, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className='flex items-center justify-start gap-2 rounded-lg py-2 tracking-wider'
                                    >
                                      <div className='flex h-10 w-10 items-center  justify-center rounded-lg bg-[#100f0eef] bg-opacity-50 text-[15px] text-gray-100'>
                                        {list.icon}
                                      </div>
                                      <div>
                                        <h4 className=' p-0 pb-1 text-[15px] font-[500] text-[#666]'>
                                          {list.title}
                                        </h4>
                                        <p className='text-[10px] leading-none text-[#888] '>
                                          {list.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  }
                </>
              ) : (
                items[index]
              )}
            </animated.a>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default SideNav;

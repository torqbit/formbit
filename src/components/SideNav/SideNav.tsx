import { menuList } from '@/components/Menu/Product';
import { animated, useSpring, useSpringRef, useTrail } from '@react-spring/web';
import { FC, useEffect, useState } from 'react';

export const RadioContent = () => {
  return (
    <div
    // className=' absolute z-[10000] h-[300px] w-full cursor-pointer border-r-2 border-[#3d3d3d] p-6'
    >
      {menuList.map((list, i) => {
        return (
          <div
            key={i}
            // className='flex items-center justify-start gap-4 rounded-lg p-2 pb-4 hover:bg-[#3b3a3a]'
          >
            <div
            // className='flex h-12 w-12 items-center justify-center rounded-lg bg-[#100f0f] bg-opacity-50 text-gray-100'
            >
              {list.icon}
            </div>
            <div>
              <h4
              // className='pb-1 text-lg font-[500] text-white'
              >
                {list.title}
              </h4>
              <p
              // className='text-[15px] text-[#666]'
              >
                {list.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const Radio: FC<{
  isToggled: boolean;
  setToggle: (value: boolean) => void;
}> = ({ isToggled, setToggle }) => {
  const menubg = useSpring({ background: isToggled ? '#000' : '#000' });
  const { y } = useSpring({
    y: isToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isToggled ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)',
    opacity: isToggled ? 1 : 0,
  });

  return (
    <div className='absolute z-[300] '>
      <animated.button
        style={menubg}
        className='radiowrapper'
        onClick={() => setToggle(!isToggled)}
      >
        <div className='radio'>
          <p>Product</p>
          <animated.p
            style={{
              transform: y.interpolate((y) => `rotateX(${y}deg)`),
              paddingLeft: '10px',
              fontSize: 25,
            }}
          >
            ▼
          </animated.p>
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <RadioContent /> : null}
      </animated.div>
    </div>
  );
};

const SideNav: FC<{ isOpen: boolean; onAnchorClick: () => void }> = ({
  isOpen,
  onAnchorClick,
}) => {
  const [isToggled, setToggle] = useState(false);

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

      {trail.map(({ height, ...style }, index) => (
        <animated.div
          key={index}
          className={`relative transition-all 
        ${index > 0 && isToggled ? `top-[45%] ` : `top-[15%]`}
          z-[200] h-[80px] w-full overflow-hidden pl-10 text-[3em] font-[700] leading-[80px] tracking-[-0.05em] text-white will-change-[transform,opacity]`}
          style={style}
        >
          <animated.a
            onClick={() => {
              items[index] !== 'Product' && onAnchorClick();
            }}
            href={`#${items[index]}`}
            style={{ height }}
          >
            {items[index] === 'Product' ? (
              <>
                <Radio isToggled={isToggled} setToggle={setToggle} />
              </>
            ) : (
              items[index]
            )}
          </animated.a>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default SideNav;

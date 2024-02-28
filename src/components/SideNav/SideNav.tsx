import { animated, useSpring, useSpringRef, useTrail } from '@react-spring/web';
import { FC, useEffect } from 'react';

const SideNav: FC<{ isOpen: boolean; onAnchorClick: () => void }> = ({
  isOpen,
  onAnchorClick,
}) => {
  const api = useSpringRef();

  const springs = useSpring({
    ref: api,
    from: { width: '0%' },
    config: { duration: 400 },
  });

  const items = [' Product', 'Solutions', 'Pricing', 'Docs', 'Blogs'];

  const trail = useTrail(3, {
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
          className='relative top-[25%] z-[200] h-[80px] w-full overflow-hidden pl-10 text-[3em] font-[700] leading-[80px] tracking-[-0.05em] text-white will-change-[transform,opacity]'
          style={style}
        >
          <animated.a
            onClick={onAnchorClick}
            href={`#${items[index]}`}
            style={{ height }}
          >
            {items[index]}
          </animated.a>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default SideNav;

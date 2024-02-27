import { FC } from 'react';

const Avatar: FC<{ name: any; picture: string }> = ({ name, picture }) => {
  return (
    <div className='flex items-center gap-2 py-4'>
      <img
        className=' h-6 w-6 rounded-full'
        src={picture}
        alt='profile picture'
      />
      <div className='text-xl font-[600]'>{name}</div>
    </div>
  );
};
export default Avatar;

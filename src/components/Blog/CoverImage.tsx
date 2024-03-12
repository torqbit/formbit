import Image from 'next/image';
import { FC } from 'react';

const CoverImage: FC<{ src: string; title: string; slug: string }> = ({
  src,
  title,
  slug,
}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1200}
      height={497}
    />
  );
  return (
    <>
      <div>{slug ? <div></div> : image}</div>
    </>
  );
};

export default CoverImage;

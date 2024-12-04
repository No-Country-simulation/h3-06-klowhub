import { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';

export type THeroProps = {
  image: StaticImageData | string;
  children: ReactNode;
};

const Hero: FC<THeroProps> = ({ image, children }) => {
  return (
    <div
      className={`w-full h-[336px] flex items-center justify-center bg-lightgray bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPositionY: '15%',
        backgroundPositionX: '50%',
      }}
    >
      <div className="flex bg-black bg-opacity-30 grow w-full h-full justify-center items-center bg-fill bg-no-repeat">
        {children}
      </div>
    </div>
  );
};

export default Hero;

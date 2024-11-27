import Image from 'next/image';
import React from 'react';
import LogoImage from '@/assets/logo.svg';
import { Link } from '@/i18n/routing';
const Logo = () => {
  return (
    <Link href={'/'} className=" flex justify-center items-center ">
      <Image
        width={56}
        height={58}
        sizes="100vw"
        src={LogoImage}
        alt="KlowHub"
      />
    </Link>
  );
};

export default Logo;

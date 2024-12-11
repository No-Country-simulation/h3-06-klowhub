import { cn } from '@/_lib';
import LogoImage from '@/assets/logo.svg';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={'/'} className={cn('flex grow-0 shrink-0', className)}>
      <Image
        width={56}
        height={58}
        sizes="100vw"
        src={LogoImage}
        alt="KlowHub"
        className="h-full w-full"
      />
    </Link>
  );
};

export default Logo;

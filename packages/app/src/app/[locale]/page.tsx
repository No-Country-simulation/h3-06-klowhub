import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="bg-background-form opacity-80  flex flex-col items-center justify-center h-full py-[30px] px-[60px] ">
      <main>This is the home page</main>
    </div>
  );
}

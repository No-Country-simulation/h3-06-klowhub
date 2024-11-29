import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-grow items-center justify-center py-[30px] px-[60px] ">
      This is the home page
    </div>
  );
}

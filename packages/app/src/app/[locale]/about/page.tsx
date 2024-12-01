import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <div>
      <h2>{t('default', { defaultMessage: 'About us page' })}</h2>
    </div>
  );
}

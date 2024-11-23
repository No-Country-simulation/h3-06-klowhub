import SignInButton from '@/components/ui/signInButton/signInButton';
import { Link } from '@/i18n/routing';

const AppBar = () => {
  return (
    <div className="p-2 shadow flex gap-3 bg-gradient-to-br from-primary-lavander-400 to-secondary-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
      <SignInButton />
    </div>
  );
};

export default AppBar;

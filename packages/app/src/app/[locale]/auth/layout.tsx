import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-gradient-to-br from-primary-lavander-100 to-secondary-900 h-full w-full items-center justify-center ">
      {children}
    </div>
  );
};
export default AuthLayout;

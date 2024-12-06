import { ReactNode } from 'react';

const PublishCoursLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full py-[30px] px-[60px] bg-[#3A3A46] ">
      {children}
    </div>
  );
};
export default PublishCoursLayout;

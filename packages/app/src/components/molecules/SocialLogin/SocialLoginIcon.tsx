import React, { AnchorHTMLAttributes, FC } from 'react';

const SocialLoginIcon: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <a href={href} className="rounded-full border-2 border-secondary-200 p-2">
      {children}
    </a>
  );
};

export default SocialLoginIcon;

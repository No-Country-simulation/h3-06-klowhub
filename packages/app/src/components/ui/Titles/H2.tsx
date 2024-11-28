import React, { FC, HTMLAttributes } from 'react';

const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return (
    <h2 className="inter text-xl leading-40 font-bold mb-6 text-center text-white uppercase">
      {children}
    </h2>
  );
};

export default H2;

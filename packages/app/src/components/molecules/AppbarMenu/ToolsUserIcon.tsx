'use client';
import { useConfigStateAppStore } from '@/stores/configStateApp.store';
import React, { FC } from 'react';

export type TToolsUserIcon = {
  children: React.ReactNode;
  isSeller: boolean;
};
const ToolsUserIcon: FC<TToolsUserIcon> = ({ children, isSeller }) => {
  const { getSellerMode } = useConfigStateAppStore((state) => state);

  const sellerMode = getSellerMode();
  // ver si es modo vendedor o explrador
  if (isSeller && !sellerMode) {
    return <div>{children}</div>;
  }
};

export default ToolsUserIcon;

import TextLink, {
  TTextLinkProps,
} from '@/components/ui/links/textLink/TextLink';
import React, { FC } from 'react';

export type THaveAccount = TTextLinkProps & {
  question: string;
};
const HaveAccountLink: FC<THaveAccount> = ({ question, href, children }) => {
  return (
    <div className="flex justify-content-center gap-[6px]">
      <span className="text-white">{question}</span>
      <TextLink href="/auth/signup" variant="primary">
        {children}
      </TextLink>
    </div>
  );
};

export default HaveAccountLink;

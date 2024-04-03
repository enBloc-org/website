import { ReactNode } from 'react';
import Link from 'next/link';
import { twMerge as tm } from 'tailwind-merge';

type ContactLinkProps = {
  className?: string;
  children: ReactNode;
};

const ContactLink: React.FC<ContactLinkProps> = ({ className, children }) => {
  return (
    <Link
      href={'mailto:hello@enbloc.uk'}
      className={tm('rounded-xl bg-highlight-green px-4  py-3', className)}
    >
      {children}
    </Link>
  );
};

export default ContactLink;

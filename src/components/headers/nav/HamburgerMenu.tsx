'use client';

import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';
import { useState, RefObject } from 'react';
import HamburgerButton from './HamburgerButton';

type HamburgerPropTypes = {
  linkRefs: {
    title: string;
    ref: RefObject<HTMLDivElement>;
  }[];
};

const HamburgerMenu: React.FC<HamburgerPropTypes> = ({ linkRefs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTarget = (targetRef: RefObject<HTMLDivElement>) => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav>
      <HamburgerButton isOpen={isOpen} clickHandler={clickHandler} />
      <div
        className={`nav-menu ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-5 opacity-0'
        }`}
      >
        <div className='flex flex-col gap-8'>
          {linkRefs.map((link) => {
            return (
              <button
                key={link.title}
                className='link font-sans text-4xl'
                onClick={() => scrollToTarget(link.ref)}
              >
                {link.title}
              </button>
            );
          })}
        </div>
        <div className='mt-10 flex flex-col gap-10 sm:mt-0'>
          <Link href={'/'}>hello@enbloc.uk</Link>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <Link
            href={'mailto:hello@enbloc.uk'}
            className='rounded-xl bg-highlight-green px-4 py-3'
          >
            send us a message
          </Link>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <div className='flex justify-around pb-4'>
            <Link
              href={'https://www.instagram.com/enbloc_dev/'}
              target='_blank'
            >
              <InstagramIcon height={50} width={50} />
            </Link>
            <Link
              href={
                'https://www.linkedin.com/company/100594044/admin/feed/posts/'
              }
              target='_blank'
            >
              <LinkedInIcon height={50} width={50} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;

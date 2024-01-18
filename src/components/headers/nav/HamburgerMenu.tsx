'use client';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';
import { useState } from 'react';
import HamburgerButton from '../HamburgerButton';

type HamburgerPropTypes = {
  links: {
    title: string;
    href: string;
  }[];
};

const HamburgerMenu: React.FC<HamburgerPropTypes> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen);
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
        <div className='flex flex-col gap-10'>
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.title}
                className='font-sans text-4xl'
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className='flex flex-col gap-10'>
          <Link href={'/'}>hello@enbloc.uk</Link>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <Link
            href={'/contact'}
            className='rounded-xl bg-highlight-green px-4 py-3'
          >
            send us a message
          </Link>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <div className='flex justify-around'>
            <Link href={'/'}>
              <InstagramIcon height={50} width={50} />
            </Link>
            <Link href={'/'}>
              <LinkedInIcon height={50} width={50} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;

'use client';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';
import { useState } from 'react';

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
      <button
        onClick={clickHandler}
        className='relative z-20 flex flex-col items-center justify-center rounded-full border-4 border-black p-4'
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`mt-2 block h-2 w-14 rounded-full bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? 'translate-y-4 rotate-45' : '-translate-y-0.0'
                      }`}
        ></span>
        <span
          className={`mt-2 block h-2 w-14 rounded-full bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
        ></span>
        <span
          className={`mb-2 mt-2 block h-2 w-14 rounded-full bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? '-translate-y-4 -rotate-45' : 'translate-y-0'
                      }`}
        ></span>
      </button>
      <div
        className={`absolute left-0 top-0 z-10 flex h-screen w-screen transform flex-col items-center justify-around gap-2 rounded-l bg-[#C4D1D6] p-4 text-center shadow-lg transition-all duration-500 ease-in-out sm:flex-row lg:px-44 ${
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
          <button className='bg-highlight-green rounded-lg px-4 py-3'>
            send us a message
          </button>
          <div className='h-0.5 w-full rounded-full bg-black'></div>
          <div className='flex justify-around'>
            <InstagramIcon height={50} width={50} />
            <LinkedInIcon height={50} width={50} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;

'use client';
import { RefObject } from 'react';
import Image from 'next/image';

//Components
import HamburgerMenu from './nav/HamburgerMenu';
import Hero from './Hero';

type HeaderPropTypes = {
  linkRefs: {
    title: string;
    ref: RefObject<HTMLDivElement>;
  }[];
};

const StickyHeader: React.FC<HeaderPropTypes> = ({ linkRefs }) => {
  return (
    <header className='min-h-screen'>
      <div className='relative px-6 py-10 sm:px-16 md:px-36'>
        <div className='relative h-20 w-48 md:h-28 md:w-72'>
          <Image
            src='/enBloc-logo-teal-nobg.png'
            alt='enBloc logo'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <HamburgerMenu linkRefs={linkRefs} />
      </div>
      <Hero />
    </header>
  );
};

export default StickyHeader;

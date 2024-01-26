'use client';
import StickyHeader from '@/components/headers/StickyHeader';
import IncubatorBox from '@/components/IncubatorBox';
import { useRef } from 'react';

export default function Home() {
  const linkRefs = [
    { title: 'ABOUT', 
      ref: useRef(null) 
    },
    {
      title: 'WORK',
      ref: useRef(null),
    },
    {
      title: 'BLOG',
      ref: useRef(null),
    },
  ];

  return (
    <>
      <StickyHeader
        linkRefs={linkRefs}
        img='/enbloc-logo-teal-nobg.png'
        alt='Logo for enbloc'
      />
      <main className='mt-stack-sm flex flex-col items-center'>
        <IncubatorBox aboutRef={linkRefs[0].ref} />
      </main>
      ;
    </>
  );
}

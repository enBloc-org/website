'use client';
import BlogSection from '@/components/BlogSection';
import StickyHeader from '@/components/headers/StickyHeader';
import IncubatorSection from '@/components/IncubatorSection';
import OurWorkSection from '@/components/OurWorkSection';
import Footer from '@/components/footer/Footer';
import { useRef } from 'react';

export default function Home() {
  const linkRefs = [
    { title: 'ABOUT', ref: useRef(null) },
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
      <StickyHeader linkRefs={linkRefs} />
      <main className='mt-stack-sm flex flex-col'>
        <IncubatorSection aboutRef={linkRefs[0].ref} />
        <OurWorkSection workRef={linkRefs[1].ref} />
        <BlogSection blogRef={linkRefs[2].ref} />
        <Footer />
      </main>
    </>
  );
}

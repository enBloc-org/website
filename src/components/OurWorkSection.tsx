'use client';
import { RefObject } from 'react';

type OurWorkProps = {
  workRef: RefObject<HTMLDivElement>;
};

const OurWorkSection: React.FC<OurWorkProps> = ({ workRef }) => {
  return (
    <section ref={workRef}>
      <h2
        className='bg-en-blue pl-small-screen xl:pl-large-screen mr-20 mt-stack-lg 
      max-w-[1000px] rounded-r-full p-8 text-4xl text-white'
      >
        Our Work
      </h2>
      <p className='m-20 text-xl italic'>Section coming soon</p>
    </section>
  );
};

export default OurWorkSection;

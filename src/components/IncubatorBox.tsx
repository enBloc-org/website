'use client';
import Image from 'next/image';
import placeholderImg from '../../public/placeholder.jpg';
import { RefObject } from 'react';

type IncubatorProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const IncubatorBox: React.FC<IncubatorProps> = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className='flex flex-col gap-6 '>
      <h1 className='pt-5 text-center text-3xl'>
        An Incubators for Developers
      </h1>
      <div className='mt-stack-sm md:flex'>
        <div className='relative m-auto h-[350px] w-[350px] md:order-2'>
          <Image
            src={placeholderImg}
            fill={true}
            alt='The enbloc team'
            className='rounded-3xl'
          />
        </div>
        <div
          className='md:px-medium-screen bg-en-orange mt-stack-sm mr-6 rounded-r-3xl px-12 py-8 
            leading-relaxed text-white md:order-1 md:w-1/2'
        >
          <h2 className='p-6 text-xl italic'>About us</h2>
          <p>
            <span className='ml-4'>enBloc</span> is a lot of things.{' '}
            <strong className='text-lg italic'>Agile and adaptable</strong>, we
            are a web agency born from the ever growing Founders and Coders
            alumni community and a creator of open source tools for everyone in
            the tech space. Working with us will allow you to harness the power
            of a collective of developers with a variety of backgrounds and
            strengths.
          </p>
          <p className='mt-4'>
            <span className='ml-4'>We</span> bring a{' '}
            <strong className='text-lg italic'>passion for innovation</strong>{' '}
            to the industry that is rooted in the{' '}
            <strong className='text-lg italic'>spirit of collaboration</strong>.
            enBloc is set to impact tech with the motivation of a diverse group
            of self-starters and the experience and know-how of a longstanding
            hallmark in the industry.
          </p>
        </div>
      </div>
      <div className='mt-[-4rem]'>
        <div className='grid size-128 max-w-[350px] grid-cols-12 grid-rows-12 overflow-hidden'>
          <Image
            src='/enBloc-logo-teal-nobg.png'
            alt='enBloc logo'
            width={300}
            height={300}
            className='z-30 col-span-8 col-start-3 row-start-5 '
          />
          <Image
            src='/en-logo-burnt-orange.png'
            alt='enBloc logo'
            width={80}
            height={80}
            className='z-20 col-span-5 col-start-4 row-start-6'
          />
          <Image
            src='/en-logo-yellow.png'
            alt='enBloc logo'
            width={80}
            height={80}
            className='z-10 col-span-5 col-start-5 row-start-7'
          />
          <Image
            src='/en-logo-red.png'
            alt='enBloc logo'
            width={80}
            height={80}
            className='z-0 col-span-5 col-start-6 row-start-8'
          />
        </div>
        <div className='bg-en-red ml-6 rounded-l-3xl px-12 py-8 text-white'>
          <h2 className='p-6 text-2xl italic'>Our Process</h2>
          <p>
            <span className='ml-4'>At</span> the heart of enBloc is a
            collaborative approach. We tackle each project as a collaboration
            between enBloc members and product owners.
          </p>
          <p className='mt-4'>
            <span className='ml-4'>By</span> bringing product owners together
            with a diverse technical team at different stages of their career.
            We emphasise{' '}
            <strong className='text-lg italic'>knowledge sharing</strong>and
            <strong className='text-lg italic'>mentorship</strong> internally to
            guarantee that every project shipped by enBloc is the result of the
            best efforts of a concise network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncubatorBox;

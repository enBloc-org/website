'use client';
import Image from 'next/image';
import { RefObject } from 'react';
import Link from 'next/link';

type IncubatorProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const IncubatorSection: React.FC<IncubatorProps> = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className='flex flex-col gap-6 xl:mt-stack-md'>
      <h2 className='px-4 text-center text-xl font-light italic sm:text-2xl md:text-3xl lg:text-4xl'>
        A Web Agency With Purpose
      </h2>
      <div className='mt-stack-sm items-center xl:flex'>
        <div className='relative m-auto h-[350px] w-[350px] md:h-[400px] md:w-[450px] lg:order-2'>
          <Image
            src={'/enbloc-2.jpg'}
            fill={true}
            alt='The enbloc team'
            className='rounded-3xl'
          />
        </div>
        <div className='colour-text-card mr-6 rounded-r-3xl bg-en-orange font-overpass lg:mr-40 xl:mr-[-2rem]'>
          <h2 className='text-xl font-semibold italic'>
            enBloc is a lot of things.
          </h2>
          <p className='mt-4'>
            Agile and adaptable, we are a web agency born from the ever growing
            Founders and Coders alumni community and a creator of open source
            tools. Working with us will allow you to harness the power of a
            collective of developers with a variety of backgrounds and
            strengths.
          </p>
          <p className='mt-4'>
            We bring a{' '}
            <span className='font-light italic'>passion for innovation</span> to
            the industry that is rooted in the{' '}
            <span className='font-light italic'>spirit of collaboration</span>.
            enBloc is set to impact tech with the motivation of a diverse group
            of self-starters and the experience and know-how of our parent
            organisation{' '}
            <Link
              className='italic underline'
              href={'https://www.foundersandcoders.com/'}
            >
              <span className='text-lg font-semibold italic'>
                {' '}
                Founders and Coders{' '}
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className='mt-[-4rem] items-center xl:mt-stack-sm xl:flex'>
        <div className='m-auto grid size-128 max-w-[350px] grid-cols-12 grid-rows-12'>
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
        <div className='colour-text-card ml-6 rounded-l-3xl bg-en-red font-overpass lg:ml-40 xl:ml-[-2rem]'>
          <h2 className='text-xl font-semibold italic'>
            An incubator for developers{' '}
          </h2>{' '}
          <p className='mt-4'>
            enBloc is a group of Founders and Coders alumni who found their
            passion through collaboration with early-stage project owners and
            organisations, bringing ideas to reality.
          </p>
          <p className='mt-4'>
            Our ethos is simple:{' '}
            <span className='font-light italic'>
              inspire, collaborate, and grow together.
            </span>{' '}
            This is reflected in our continued work with Founders and Coders,
            where we continue to mentor and support the new generation of tech
            talents. We believe in partnerships, not client lists and our
            process isn&apos;t just about the end product. It&apos;s about the
            shared experience, the collective learning, and the success that
            comes when we all grow together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncubatorSection;

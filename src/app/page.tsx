import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='size-128 grid grid-cols-12 grid-rows-12'>
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
        <div className='w-fit text-center md:mt-14'>
          <h1 className='text-3xl font-bold'>All together or not at all</h1>
          <h2 className='text-sm font-light italic'>Site coming soon</h2>
          <h3 className='mt-10 font-semibold'>
            Having an idea you want to build?
          </h3>
          <p className='mt-2 italic'>hello@enbloc.uk</p>
        </div>
      </div>
    </main>
  );
}

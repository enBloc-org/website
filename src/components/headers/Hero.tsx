import Image from 'next/image';
import hero from '/public/Colour-Worm.svg';

const Hero = () => {
  return (
    <div
      className='flex h-96 w-full items-center justify-center 
      sm:mt-16 xl:mt-32'
    >
      <div
        className='absolute z-10 mb-10 font-mono text-2xl tracking-tight
         text-white sm:mb-20 sm:text-3xl xl:text-[55px] xl:tracking-tighter'
      >
        <p className='sm:mr-3 sm:inline-block xl:mr-5'>All together </p>
        <p className='sm:inline-block'>or not at all</p>
      </div>
      <div
        className='absolute z-0 h-[350px] w-[100%] sm:h-[650px] 
        sm:w-[650px] lg:h-[768px] lg:w-[768px] xl:h-[1100px] xl:w-[1100px]'
      >
        <Image src={hero} fill alt='A brightly coloured worm like drawing' />
      </div>
    </div>
  );
};

export default Hero;

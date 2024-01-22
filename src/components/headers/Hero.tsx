import Image from 'next/image';
import hero from '/public/Colour-Worm.svg';

const Hero = () => {
  return (
    <div className='flex h-96 w-full items-center justify-center'>
      <h1 className='absolute z-10 mb-10 font-mono text-2xl tracking-tight text-white'>
        All together <br/>
         or not at all
      </h1>
      <div className='absolute z-0 h-[350px] w-[100%] overflow-hidden'>
        <Image src={hero} fill alt='A brightly coloured worm like drawing' />
      </div>
    </div>
  );
};

export default Hero;

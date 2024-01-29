import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='h-60 bg-en-green text-white'>
      <div className='flex flex-wrap items-center justify-center text-center gap-8 px-2 mt-8 '>
        <div className='relative h-20 w-20'>
          <Image
            src={'/en-logo-burnt-orange.png'}
            alt='Orange block with the letters en'
            fill
          />
        </div>
        <h3 className='text-xl font-sans font-bold'>Let&apos;s Collaborate</h3>
        <p>
          We&apos;d love to hear about your next project and show you how we can
          help.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Image from 'next/image';
import ContactButton from '../headers/nav/ContactLink';
import LinkedInIcon from '../icons/LinkedInIcon';
import InstagramIcon from '../icons/InstagramIcon';

const Footer = () => {
  return (
    <footer className='mt-20 bg-en-green px-2 py-8 text-white'>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-8 px-2 md:justify-around'>
        <div className='flex flex-wrap items-center justify-center gap-8'>
          <div className='relative h-24 w-24 md:h-40 md:w-40'>
            <Image
              src={'/en-logo-burnt-orange.png'}
              alt='Orange block with the letters en'
              fill
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='pl-4 text-center font-sans text-xl font-bold sm:text-start md:text-2xl'>
              Let&apos;s Collaborate
            </h3>
            <p className='max-w-80 px-4 text-justify italic'>
              We&apos;d love to hear about your next project and show you how we
              can help.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-8 md:flex-col'>
          <ContactButton className='bg-slate-100 text-black'>
            Get in touch &#8594;
          </ContactButton>
          <div className='flex gap-8'>
            <LinkedInIcon height={50} width={50} />
            <InstagramIcon height={50} width={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

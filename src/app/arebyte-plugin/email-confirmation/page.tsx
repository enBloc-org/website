import Image from 'next/image';
import Link from 'next/link';

const EmailConfirmationPage = () => {
  return (
    <div className='mt-44 flex flex-col items-center justify-center gap-10 font-sans text-xl'>
      <Image
        src='/arebyte-Plugin-blue.png'
        alt='Arebyte plugin logo'
        width={300}
        height={350}
      />
      <div className='flex flex-col gap-5'>
        <h1 className='font-serif'>Your email has been confirmed</h1>
        <p>Please log in via the Arebyte Plugin.</p>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;

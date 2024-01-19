import Link from 'next/link';
import Image from 'next/image';

//Components
import HamburgerMenu from './headers/nav/HamburgerMenu';

type HeaderPropTypes = {
  img: string;
  alt: string;
};

const links = [
  { title: 'HOME', href: '/' },
  { title: 'WORK', href: '/work' },
  { title: 'BLOG', href: '/blog' },
];

const StickyHeader: React.FC<HeaderPropTypes> = ({ img, alt }) => {
  return (
    <header className='sticky top-0 flex items-center justify-between p-10 sm:px-16 md:px-36'>
      <div className='relative h-20 w-48 border-2 border-red-500 md:h-28 md:w-72'>
        <Image
          src={img}
          alt={alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <HamburgerMenu links={links} />
    </header>
  );
};

export default StickyHeader;

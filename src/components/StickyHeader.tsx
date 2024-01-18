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
      <Link href='/'>
        <Image src={img} alt={alt} height={200} width={200} />
      </Link>
      <HamburgerMenu links={links} />
    </header>
  );
};

export default StickyHeader;

type HamburgerButtonProps = {
  isOpen: boolean;
  clickHandler: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  clickHandler,
}) => {
  return (
    <button
      onClick={clickHandler}
      className='fixed right-[6%] top-11 z-50 flex h-16 w-16 flex-col items-center 
      justify-center rounded-full border-4 border-black sm:right-11 md:right-36 
      md:top-16 lg:top-11 lg:h-24 lg:w-24'
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={isOpen}
    >
      <span
        className={`large-screen-btn mt-2 block h-1 w-8 rounded-full
                      bg-neutral-900 transition-all duration-300 ease-out ${
                        isOpen
                          ? 'translate-y-3 rotate-45 lg:translate-y-4'
                          : '-translate-y-0.0'
                      }`}
      ></span>
      <span
        className={`large-screen-btn mt-2 block h-1 w-8 rounded-full bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
      ></span>
      <span
        className={`large-screen-btn mb-2 mt-2 block h-1 w-8 rounded-full bg-neutral-900
                      transition-all duration-300 ease-out ${
                        isOpen
                          ? '-translate-y-3 -rotate-45 lg:-translate-y-4'
                          : 'translate-y-0'
                      }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;

'use client';
import { RefObject } from 'react';

type BlogProps = {
  blogRef: RefObject<HTMLDivElement>;
};

const BlogSection: React.FC<BlogProps> = ({ blogRef }) => {
  return (
    <section ref={blogRef}>
      <div className='flex justify-end'>
        <h2
          className='bg-en-pink pl-small-screen xl:pl-large-screen w-3/4 ml-20 mt-stack-lg
        max-w-[1000px] rounded-l-full p-8 text-4xl text-white xl:px-large-screen'
        >
          Blog
        </h2>
      </div>
      <p className='m-20 text-xl italic text-center'>Section coming soon</p>
    </section>
  );
};

export default BlogSection;

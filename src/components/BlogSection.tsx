'use client';
import { RefObject } from 'react';

type BlogProps = {
  blogRef: RefObject<HTMLDivElement>;
};

const BlogSection: React.FC<BlogProps> = ({ blogRef }) => {
  return (
    <section ref={blogRef}>
      <h2
        className='bg-en-pink pl-small-screen xl:pl-large-screen ml-20 mt-stack-lg 
      max-w-[1000px] rounded-l-full p-8 text-4xl text-white'
      >
        Blog
      </h2>
      <p className='m-20 text-xl italic'>Section coming soon</p>
    </section>
  );
};

export default BlogSection;

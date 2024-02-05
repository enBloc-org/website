'use client';
import { RefObject } from 'react';

type OurWorkProps = {
  workRef: RefObject<HTMLDivElement>;
};

const OurWorkSection: React.FC<OurWorkProps> = ({ workRef }) => {
  return (
    <section ref={workRef}>
      <h2
        className='mb-stack-md mr-20 mt-stack-lg max-w-[1000px] rounded-r-full bg-en-blue 
      p-8 pl-small-screen text-4xl text-white xl:pl-large-screen'
      >
        Recent Work
      </h2>
      <div className='grid grid-cols-2 grid-rows-2'>
        <div className='m-5 w-3/4 rounded-lg bg-en-orange p-8 text-white'>
          <h3 className='pb-4 text-2xl italic'>Cambridge University</h3>
          <p>
            In collaboration with researchers at Cambridge University, our team
            at enBloc had the opportunity to contribute to academic discovery.
            <br />
            <br /> In this project we built a bespoke scraper capable of
            extracting insights from over 8 million archival files.
          </p>
        </div>
        <div className='m-5 w-3/4 rounded-lg bg-en-orange p-8 text-white'>
          <h3 className='pb-4 text-2xl italic'>Kindly</h3>
          <p>
            Trafalgar Girls, a charity supporting Ukrainian refugees in the UK,
            needed a dedicated marketplace to allow for the streamlined
            management of donations within their community.
            <br />
            <br /> In response, the Kindly app allows donors and refugees to
            communicate, provide and receive support as needed.
          </p>
        </div>
        <div className='m-5 w-3/4 rounded-lg bg-en-orange p-8 text-white'>
          <h3 className='pb-4 text-2xl italic'>Cinesphere</h3>
          <p>
            Discovering independent cinema in London is made easier with
            Cinesphere. <br />
            <br /> This tailor-made tool for cinephiles offers information on
            showings at various independent movie theatres.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;

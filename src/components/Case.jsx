import React from 'react';
import Container from './Container';
import Topic from './Topic';
import Counter from './Counter';

const Cases = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row" id="projects">
        <Topic
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </div>

      <div className="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0">
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal text-blue-300">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal text-blue-300">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal text-blue-300">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center md:flex-row pt-16">
        <Topic title="Results" description="The Results that We have delivered to our Clients" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <div
            style={{
              color: 'black',
              textShadow: `
                -1px -1px 0 #93c5fd,  
                1px -1px 0 #93c5fd,
                -1px 1px 0 #93c5fd,
                1px 1px 0 #93c5fd`,
              fontWeight: 'bold',
              fontSize: '2em',
            }}
          >
            <Counter start={100000} end={727131} duration={4000} />
          </div>
          <p className="text-center">Qualified Leads Generated</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <div
            style={{
              color: 'black',
              textShadow: `
                -1px -1px 0 #93c5fd,  
                1px -1px 0 #93c5fd,
                -1px 1px 0 #93c5fd,
                1px 1px 0 #93c5fd`,
              fontWeight: 'bold',
              fontSize: '2em',
            }}
          >
            <Counter start={2000000} end={6160225} duration={3800} />
          </div>
          <p className="text-center">Total Amount Of Reach Generated for Brands</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <div
            style={{
              color: 'black',
              textShadow: `
                -1px -1px 0 #93c5fd,  
                1px -1px 0 #93c5fd,
                -1px 1px 0 #93c5fd,
                1px 1px 0 #93c5fd`,
              fontWeight: 'bold',
              fontSize: '2em',
            }}
          >
            <Counter start={50000} end={526517} duration={4100} />
          </div>
          <p className="text-center">E-commerce</p>
          <p className="text-center">Transactions</p>
        </div>
        <div className="h-[120px] px-[20px] py-10 bg-white rounded-[20px] shadow-card border border-zinc-900 flex flex-col justify-center items-center text-black">
          <div
            style={{
              color: 'black',
              textShadow: `
                -1px -1px 0 #93c5fd,  
                1px -1px 0 #93c5fd,
                -1px 1px 0 #93c5fd,
                1px 1px 0 #93c5fd`,
              fontWeight: 'bold',
              fontSize: '2em',
            }}
          >
            <Counter start={7000000} end={14056221} duration={3700} />
          </div>
          <p className="text-center">Average Brand Engagement</p>
        </div>
      </div>
    </Container>
  );
};

export default Cases;

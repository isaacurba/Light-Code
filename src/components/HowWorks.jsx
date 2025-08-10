import React from 'react';
import HowWorkCard from './HowWorkCard';

// Put these images in public/img/
const AFTER_CARD1 = "lg:after:bg-[url('/img/line.png')]";
const AFTER_CARD2 = "lg:after:bg-[url('/img/line-bottom.png')]";

function HowWorks() {
  const howWorkData = [
    {
      title: '1',
      content: 'Lorem ipsum dolor sit amet...',
      after: AFTER_CARD1
    },
    {
      title: '2',
      content: 'Lorem ipsum dolor sit amet...',
      after: AFTER_CARD2
    },
    {
      title: '3',
      content: 'Lorem ipsum dolor sit amet...',
      after: ''
    },
  ];

  return (
    <section className="bg-color-primary-light">
      <div className="container py-20 text-color-white">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="text-color-secondary">How it works</h4>
          <h1 className="title text-white">Grow up your money savings</h1>
        </div>

        <div className="flex flex-col items-center text-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          {howWorkData.map((work, index) => {
            const bgcolor = index === 1 ? 'bg-color-secondary' : 'bg-color-dark';
            return (
              <HowWorkCard
                key={index}
                title={work.title}
                content={work.content}
                bgcolor={bgcolor}
                afterClasses={work.after}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWorks;

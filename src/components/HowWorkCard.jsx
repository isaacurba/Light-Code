import React from 'react';

function HowWorkCard({ title, content, bgcolor, afterClasses = '' }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${bgcolor || 'bg-color-primary-dark'} bg-color-primary-dark relative inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200`}
      >
        <p
          className={`text-6xl relative lg:after:content-[''] ${afterClasses} lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-40 lg:after:block`}
        >
          {title}
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold py-4">Install The App</h3>
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default HowWorkCard;

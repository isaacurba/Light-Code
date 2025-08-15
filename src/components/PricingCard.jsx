const PricingCard = ({ priceOpen, title, price, period, description, features }) => {
  return (
    <div
      className={`card relative h-auto w-auto transition-transform duration-500 preserve-3d ${priceOpen ? 'rotate-y-180' : ''}`}>
      {/* Front Card */}
      <div className="front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full backface-hidden">
        <div className="relative">
          <div className="text-6xl pl-2 before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
            {price}
            <span className="text-sm font-normal tracking-widest">
              {period}
            </span>
          </div>

          <div className="py-10">
            <h3 className="text-xl font-bold pb-3">{title}</h3>
            <p className="leading-relaxed">{description}</p>
          </div>

          <ul className="space-y-4 pb-10">
            {features.map((f, i) => (
              <li key={i}>
                <i className={`fa-solid fa-bookmark ${f.active ? 'text-color-secondary' : 'text-color-gray'}`}></i>
                <span className="pl-4">{f.label}</span>
              </li>
            ))}
          </ul>

          <button className="card_btn">Get Started</button>
        </div>
      </div>

      {/* Back Card */}
      <div className="back rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0 backface-hidden">
        <h3 className="text-xl font-bold">Annual Plan</h3>
        <div className="text-6xl pl-2 before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0">
            {price}{' '}
            <span className="text-sm font-normal tracking-widest">
              {period}
            </span>
          </div>

          <div className="py-10">
            <h3 className="text-xl font-bold pb-3">{title}</h3>
            <p className="leading-relaxed">{description}</p>
          </div>

          <ul className="space-y-4 pb-10">
            {features.map((f, i) => (
              <li key={i}>
                <i className={`fa-solid fa-bookmark ${f.active ? 'text-color-secondary' : 'text-color-gray'}`}></i>
                <span className="pl-4">{f.label}</span>
              </li>
            ))}
          </ul>

          <button className="card_btn">Get Started</button>

      </div>
    </div>
  );
};

export default PricingCard;

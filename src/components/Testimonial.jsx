import { useState } from "react";
import "./animaion.css";

const testimonials = [
  {
    img: "/img/user1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quod velit, illo totam quidem praesentium exercitationem nulla recusandae iste reiciendis.",
    name: "Mark Zuckerberg",
    role: "iOS Developer"
  },
  {
    img: "/img/user2.jpg",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    name: "Elon Musk",
    role: "Android Developer"
  },
  {
    img: "/img/user3.jpg",
    text: "Praesent sit amet augue ac erat suscipit tincidunt et id libero.",
    name: "Bill Gates",
    role: "React Native Developer"
  },
  {
    img: "/img/user4.jpg",
    text: "Fusce fringilla lorem sed nisi vehicula, nec interdum erat bibendum.",
    name: "Sundar Pichai",
    role: "Web Developer"
  },
  {
    img: "/img/user5.jpg",
    text: "Mauris eget magna vel orci cursus tincidunt nec nec mi.",
    name: "Satya Nadella",
    role: "Software Developer"
  }
];

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section>
      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="text-color-secondary">User Review</h4>
          <h1 className="title text-white">
            What clients say about our app after using it
          </h1>
        </div>

        <div className="mt-8">
          {/* clickable avatars */}
          <div className="flex items-center justify-center flex-wrap">
            {testimonials.map((t, index) => (
              <img
                key={index}
                onClick={() => setSelectedIndex(index)}
                src={t.img}
                alt={t.name}
                className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer move-up ${
                  selectedIndex === index ? "ring-2 ring-color-secondary" : ""
                }`}
              />
            ))}
          </div>

          {/* selected testimonial */}
          <div className="grid items-center text-color-white text-center m-auto md:w-4/5 min-h-[40vh]">
            <div
              key={selectedIndex} // force re-render so animation restarts
              className={`${
                selectedIndex !== null ? "user-text" : ""
              }`}
            >
              <p className="md:text-2xl mb-6">
                {testimonials[selectedIndex].text}
              </p>
              <h4 className="font-bold text-color-secondary mb-1">
                {testimonials[selectedIndex].name}
              </h4>
              <p>{testimonials[selectedIndex].role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

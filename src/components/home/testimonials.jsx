import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "We have been associated with spocto for over three years. Their services have complemented our product offerings. Their digital collection platform, SmartCollect, has enabled us to serve our customers better and at a lower cost",
    author: "Mr. Ramsunder B.",
    position: "Vice President, Fintech & Strategy @TVS",
    avatar: "/api/placeholder/60/60",
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Creating a culture of trust in Collections
          </h1>
          <p className="text-xl">
            We are leaders in the field of collections and trusted by the
            leading financial institutions
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-700">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="bg-white text-blue-900 p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="bg-white text-blue-900 p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
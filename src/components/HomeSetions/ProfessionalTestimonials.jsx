import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Prof. Sarah Mitchell",
    position: "Finance Department Head",
    company: "IIM Bangalore",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
    feedback:
      "Amit demonstrated exceptional analytical skills during his MBA program. His equity research reports showed remarkable depth and precision in financial modeling. He consistently delivered insights beyond expectations.",
  },
  {
    name: "Mr. Rajesh Kumar",
    position: "Portfolio Manager",
    company: "HDFC Asset Management",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
    feedback:
      "Amit's valuation analysis for our technology portfolio was outstanding. His DCF models and comparable company analysis provided actionable investment insights that significantly impacted our decision-making process.",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Academic Director",
    company: "XLRI Jamshedpur",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
    feedback:
      "As Amit's thesis advisor, I was impressed by his rigorous approach to financial analysis. His work on emerging market valuations sets a benchmark for academic excellence and practical application.",
  },
  {
    name: "Mr. Anil Patel",
    position: "Chief Investment Officer",
    company: "ICICI Securities",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
    feedback:
      "Amit's sector analysis reports have been instrumental in shaping our investment strategy. His ability to combine quantitative analysis with qualitative insights is truly exceptional for an emerging analyst.",
  },
  {
    name: "Prof. Michael Chen",
    position: "Finance Professor",
    company: "ISB Hyderabad",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    stars: 5,
    feedback:
      "Amit's financial modeling capabilities are among the best I've encountered. His attention to detail and understanding of complex valuation methodologies make him a standout talent in equity research.",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex mt-2 gap-1 text-[#000080]">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#000080" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const ProfessionalTestimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 text-black max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#000080]"></div>
            <span className="text-[#000080] font-semibold text-sm tracking-wider uppercase">
              Endorsements
            </span>
            <div className="w-8 h-0.5 bg-[#000080]"></div>
          </div>

          <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
            Professional{" "}
            <span className="font-normal bg-gradient-to-r from-[#000080] to-blue-600 bg-clip-text text-transparent">
              Endorsements
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Recommendations from academic mentors and industry leaders who have witnessed
            my analytical capabilities and professional growth in equity research and financial analysis.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 max-w-xs mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#000080]">15+</div>
              <div className="text-xs text-gray-600">Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#000080]">100%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#000080]">5.0</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start mt-10 gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-[#000080] bg-white  flex items-center justify-center hover:bg-[#000080] transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5 text-[#000080] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border border-[#000080] bg-white  flex items-center justify-center hover:bg-[#000080] transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5 text-[#000080] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white text-gray-800  p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#000080]/20">

                  {/* Quote Icon */}
                  <div className="absolute -top-1 -left-1 w-12 h-12 text-[#000080]  flex items-center justify-center ">
                    <svg className="w-6 h-6 text-[#000080]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                    <img
                      className="w-20 h-20  object-cover border-2 border-[#000080]/10 shadow-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium text-[#000080] mb-1">
                        {item.position}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.company}
                      </p>
                      <p className="text-xs text-gray-500 italic">
                        {item.date}
                      </p>
                      {renderStars(item.stars)}
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      "{item.feedback}"
                    </p>
                  </div>

                  {/* Decorative gradient bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#000080] to-blue-400 "></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex justify-center mt-8">
            <div className="swiper-pagination !relative !bottom-0"></div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ProfessionalTestimonials;
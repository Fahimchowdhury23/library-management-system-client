import React from "react";
import CountUp from "react-countup";

const SectionOne = () => {
  const successData = [
    {
      img: "https://i.ibb.co/Tx6VbCD1/categories.png",
      alt: "Reviews",
      title: "Total Genres",
      end: 2000,
    },
    {
      img: "https://i.ibb.co/m5WXLbvX/books.png",
      alt: "Shops",
      title: "Books Borrowed",
      end: 12000,
    },
    {
      img: "https://i.ibb.co/gG1Bh5R/team.png",
      alt: "Reviews",
      title: "Active Users",
      end: 1500,
    },
    {
      img: "https://i.ibb.co/3mT9T1zH/new-book.png",
      alt: "Happy Customer",
      title: "New Arrivals",
      end: 2000,
    },
  ];

  return (
    <section
      id="success"
      className="pt-6 md:pt-8 lg:pt-10 text-center w-full md:w-11/12 md:mx-auto"
    >
      <div className="flex flex-col">
        <div className="mb-3">
          <h2 className="font-medium flex flex-wrap justify-center text-accent text-xl md:text-3xl lg:text-4xl mb-1 md:mb-2">
            A quick look at how far our&nbsp;
            <span className="font-bold">LibraFlow</span>&nbsp;has come.
          </h2>
          <p className="opacity-80 md:text-lg mb-1 md:mb-2">
            Thousands of books, one destination — where every reader finds their
            perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-2 md:gap-3 lg:gap-4">
          {successData.map((success, index) => (
            <div
              key={index}
              className="p-6 bg-neutral flex flex-col gap-1 md:gap-3 rounded-xl"
            >
              <img
                className="w-16 h-16 mx-auto lg:mx-0"
                src={success.img}
                alt={success.alt}
              />
              <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
                <CountUp
                  enableScrollSpy
                  end={success.end}
                  duration={4}
                ></CountUp>
                +
              </p>
              <p className="font-semibold md:text-2xl text-[rgba(26,24,24,0.76)]">
                {success.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

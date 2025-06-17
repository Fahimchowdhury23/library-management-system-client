import React from "react";
import CountUp from "react-countup";

const SectionOne = () => {
  return (
    <section
      id="success"
      className="pt-12 lg:pt-20 pb-16 text-center w-11/12 lg:w-10/12 mx-auto"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-accent text-4xl">
          A quick look at how far <strong>LibraFlow</strong> has come.
        </h2>
        <p className="opacity-80 text-lg pb-8">
          Thousands of books, one destination — where every reader finds their
          perfect match.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-5">
          <div className="p-5 bg-neutral flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16 mx-auto lg:mx-0"
              src="https://i.ibb.co/Tx6VbCD1/categories.png"
              alt="Reviews"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={2000} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Total Genres
            </p>
          </div>

          <div className="p-5 bg-neutral flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16 mx-auto lg:mx-0"
              src="https://i.ibb.co/m5WXLbvX/books.png"
              alt="Shops"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={12000} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Books Borrowed
            </p>
          </div>

          <div className="p-5 bg-neutral flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16 mx-auto lg:mx-0"
              src="https://i.ibb.co/gG1Bh5R/team.png"
              alt="Reviews"
            />
            <p className="font-extrabold text-5xl">
              <CountUp enableScrollSpy end={1500} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Active Users
            </p>
          </div>

          <div className="p-5 bg-neutral flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16 mx-auto lg:mx-0"
              src="https://i.ibb.co/3mT9T1zH/new-book.png"
              alt="Happy Customer"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={2000} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              New Arrivals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

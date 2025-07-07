import React from "react";

const SectionTwo = () => {
  const faqs = [
    {
      question: "How can I borrow a book from the library?",
      answer: (
        <>
          You can borrow a book by logging into your account and clicking the{" "}
          <strong>Borrow</strong> button on the book categories section.
        </>
      ),
    },
    {
      question: "How many books can I borrow at once?",
      answer: (
        <>
          You can borrow up to <strong>3 books</strong> at a time. To borrow
          more, return one or more of your current books first.
        </>
      ),
    },
    {
      question: "How long can I keep a borrowed book?",
      answer: (
        <>
          The standard borrowing period is <strong>14 days</strong>. You can
          renew it if no one else has reserved it.
        </>
      ),
    },
    {
      question: "Are there late fees for overdue books?",
      answer: (
        <>
          Yes, a small daily late fee applies. Avoid this by returning books on
          time or renewing them.
        </>
      ),
    },
    {
      question: "What types of books are available?",
      answer: (
        <>
          We have a wide range of genres including novels, thrillers, sci-fi,
          drama, and more. Use the <strong>All Books</strong> section to
          explore.
        </>
      ),
    },
    {
      question: "Can I donate books to the library?",
      answer: (
        <>
          Yes! We accept gently used books. If you're logged in, you can use the{" "}
          <strong>Add Book</strong> button on the dashboard to submit a new book
          to the collection.
        </>
      ),
    },
  ];

  return (
    <div className="pt-5 md:pt-8 lg:pt-12 pb-4 md:pb-6 lg:pb-8">
      <div>
        <img
          className="mb-2 md:mb-3 rounded-xl"
          src="https://i.ibb.co/00ZSm95/faqs-banner.webp"
          alt="FAQ Banner"
        />
      </div>

      <section className="faqs-section">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-accent/70 border border-base-300"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold text-lg">
              {faq.question}
            </div>
            <div className="collapse-content font-medium">{faq.answer}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SectionTwo;

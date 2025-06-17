import React from "react";

const SectionTwo = () => {
  return (
    <div className="py-10">
      <div className="collapse collapse-arrow bg-accent/70 border border-base-300">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold">
          How can I borrow a book from the library?
        </div>
        <div className="collapse-content text-md">
          You can borrow a book by logging into your account and clicking the
          "Borrow" button on the book's detail page.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-accent/70 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How many books can I borrow at once?
        </div>
        <div className="collapse-content text-md">
          u can borrow up to <strong>3 books</strong> at a time. To borrow more,
          return one or more of your current books first.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-accent/70 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How long can I keep a borrowed book?
        </div>
        <div className="collapse-content text-md">
          The standard borrowing period is <strong>14 days</strong>. You can
          renew it if no one else has reserved it.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-accent/70 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Are there late fees for overdue books?
        </div>
        <div className="collapse-content text-md">
          Yes, a mdall daily late fee applies. Avoid this by returning books on
          time or renewing them.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-accent/70 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Can I donate books to the library?
        </div>
        <div className="collapse-content text-md">
          Yes! we accept gently used books. If you're logged in, you can use the{" "}
          <strong>"Add Book"</strong> button on the dashboard to submit a new
          book to the collection.
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

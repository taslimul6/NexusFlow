import { faqs } from "../../data/faqs";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section id="faq" className="py-24 border-b border-neutral-800 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-left space-y-2 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 06 ] FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-neutral-800 border-y border-neutral-800">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
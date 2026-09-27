import { useId, useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="faq-item py-6 px-3">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between text-left rounded"
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <img
          src="/icons/chevron-down.svg"
          alt=""
          className={`w-4 h-4 invert opacity-60 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div id={panelId} className="pt-4 text-sm text-neutral-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
import { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
            <button className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
              <span>{item.q}</span>
              <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-answer"><p>{item.a}</p></div>}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;

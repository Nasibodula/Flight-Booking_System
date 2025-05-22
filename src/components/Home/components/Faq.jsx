import { useState } from "react";
import { faqData } from "../../../data/faqData";
import { Icon } from "@iconify/react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq flex items-center justify-center px-10">
      <div className="container">
        <div className="headline">
          <div className="title">Ask Any Question?</div>
          <div className="description">
            Check out our FAQs for helpful tips and answers to make your travel
            effortless!
          </div>
        </div>
        <div className="content">
          <div className="faq-detail">
            <div className="faq-image">
              <img
                src="/img/faq/faq-1.svg"
                alt="FAQ Image"
                width={400}
                height={400}
                priority
              />
              <a href="/help" className="all-button">
                All Questions
                <Icon icon="mingcute:right-fill" />
              </a>
            </div>
            <div className="faq-questions">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className={`accordion-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>{item.question}</h3>
                    <Icon
                      icon={
                        activeIndex === index
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      className="accordion-icon"
                    />
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

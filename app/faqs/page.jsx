"use client";

import styles from "../styles/faqs.module.css";
import { faqsData } from "@/public/faqsData";
import { useEffect, useState } from "react";

const FaqsPage = () => {
  const [accordion, setAccordionOpen] = useState(-1);

  const updateAccordion = (id) => {
    if (accordion === id) {
      setAccordionOpen(-1);
      return;
    }
    setAccordionOpen(id);
  };

  return (
    <div className={styles.section_faqs}>
      <h1 className={styles.title}>FAQs</h1>
      <h2 className={styles.subtitle}>Preguntas sobre la Bootcamp</h2>
      <div className={styles.accordion}>
        {faqsData.map((value, id) => {
          return (
            <div
              className={accordion === id ? styles.item_open : styles.item}
              key={id}
              onClick={() => updateAccordion(id)}
            >
              <a className={styles.link}>
                <h1 className={styles.question}>
                  {value.question}
                  <svg
                    className={styles.svg_down}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                  <svg
                    className={styles.svg_up}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6 15l6 -6l6 6"></path>
                  </svg>
                </h1>
              </a>
              <p className={styles.response}>{value.response}</p>
              <ul className={styles.list}>
                {value.list &&
                  value.list.map((value, id) => <li key={id}>{value.item}</li>)}
              </ul>
              <ol className={styles.list}>
                {value.ordered_list &&
                  value.ordered_list.map((value, id) => (
                    <li key={id}>{value.item}</li>
                  ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqsPage;

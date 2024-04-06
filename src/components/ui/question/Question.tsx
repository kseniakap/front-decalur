'use client'
import { FC, useState } from 'react';
import { deliveryData } from './question.data';
import st from "./Question.module.scss"

interface IQuestion{
    question: string,
    answer: string
}

const AllQuestions:FC = () => {
  return (
    <div className={st.allQuestion}>
      {deliveryData.map((faq, index) => (
        <Question key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};


const Question:FC<IQuestion> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={st.block}>
      <div onClick={toggleAnswer}>
        <p className={st.question}>{question}</p>
        <img src={`/icons/${isOpen ? 'arrowUp.svg' : 'arrowDown.svg' }`} alt="стрелка"/>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default AllQuestions;

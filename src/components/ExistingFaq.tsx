import React, { useState } from "react";

interface props {
  id: number;
  place: string;
  category: string;
  question: string;
  answer: string;
}

const ExistingFAQ = (props: props) => {
  const { id, place, category, question, answer } = props;
  const [clicked, setClicked] = useState<boolean>(false); // 기본 닫혀있음

  const onToggle = (id: number) => {
    setClicked(clicked==false ? true : false); // ((prev) => !prev);
  }


  return (
    <>
      <div>
        <span>[{place} &gt; {category}]</span>
        <button>{clicked=== false ? "▽" : "△"} </button>
      </div>
      <div>Q. {question} </div>
      <div>A. {answer} </div>
    </>
  )
}


export default ExistingFAQ;
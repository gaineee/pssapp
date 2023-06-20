import React, { useState } from "react";
import { data } from "./FAQdata";
import styled from "styled-components";
import "./ExistingFaq.css"

interface props {
  id: string,
  place: string,
  category: string
}

export const ExistingFAQ = ( {id, place, category} : props)  => { // id: 각 qna 항목의 유니크값
  const [clicked, setClicked] = useState<boolean>(false);

  let q: string = '';
  let a: string | JSX.Element = '';
  data.forEach((v, i) => {
    if (v.id === id) {
      q = v.question;
      a = v.answer;
    }
  })

  const toggleEvent = () => {
    //let cname = 'answer'+id;
    let $tg = document.getElementById(id);

    if (clicked) {
      $tg?.classList.add("active");
      setClicked(false);
      
    } else {
      $tg?.classList.remove("active");
      setClicked(true);
    }

  }
// <button>{clicked=== false ? "▽" : "△"} </button>
  return ( 
    <div className="FAQborder" onClick={toggleEvent}>
      <div className="header">
        <span>[{place} &gt; {category}]</span>
      </div>
      <div>Q. {q} </div>
      <div className="answer active" id={id}>A. {a} </div>
    </div>
  )
}

  /*
    return (
      <FAQWrap>
        {
          data.map((v, i) => {
            return (
              <FAQborder onClick={toggleEvent(v.id)} key={i} id={v.id}>
                <div>
                  <span>[{v.place} &gt; {v.category}]</span>
                  <button>{clicked=== false ? "▽" : "△"} </button>
                </div>
                <div>Q. {v.question} </div>
                <div className={['answer', `${v.id}`].join('')}>A. {v.answer} </div>
              </FAQborder>
            )
          })
        }
      </FAQWrap>
    )
*/

//export default ExistingFAQ;
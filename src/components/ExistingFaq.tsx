import React, { useState } from "react";
import { data } from "./FAQdata";
import styled from "styled-components";

/*
export const data = [
 { // HOTEL PARADISE
     id : 1,
     place: "HOTEL PARADISE",
     category: '객실',
     question: '투숙시 귀중품 보관은 어떻게 하나요?',
     answer: "귀중품은 옷장 내 비치되어 있는 금고에 보관해 주시기 바랍니다. 다만, 파라다이스 호텔&amp;리조트는 객실 내 금고의 고객 물품 분실에 법적인 책임을 지지 않습니다. <br />고가의 물품은 프론트 데스크에서 운영하는 호텔 금고를 이용해 주시기 바랍니다",
 },


*/
interface props {
  num?: number;
  place: string;
  category: string;
}

export const ExistingFAQ = ({num, place, category}: props) => { // 4, all, all
  const [clicked, setClicked] = useState<boolean>(false);

  const FAQWrap = styled.div`
    padding-left: 30px;
    padding-right: 30px;
  `

  if (place == 'all' && category == 'all') {
    let len = data.length;
    
    //data.forEach((v, i) => {
      return (
        <FAQWrap>
          <span>[{data[0].place} &gt; {data[0].category}]</span>
          <button>{clicked=== false ? "▽" : "△"} </button>
      
          <div>Q. {data[0].question} </div>
          <div>A. {data[0].answer} </div>
        </FAQWrap>
      )
  }
   // })
  //} else {
    //  return (
    //    <>
    //    </>
      //)
  //}
  
}

/*
const Ex = (props: props) => {
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
*/

//export default ExistingFAQ
import styled from "styled-components";
import React, { useState } from "react";
import PlaceDetail from "./PlaceDetail";
 // 깃허브 커밋 git commit -m "message" / 푸쉬 git push

 
export const Inquiry = () => {
  const InquiryContainer = styled.div`
    width: 400px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
    
  `
  return (
    <InquiryContainer>
      <SelectTerm></SelectTerm>
    </InquiryContainer>
  )
}

const SelectTerm = () => {
  const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  `
  const Tbutton = styled.button`
    width: 60px;
    height: 40px;
    text-align: center;
    border: 2px #9c836a solid;
    background-color: #9c836a;
    color: white;
    font-size: 15px;
    margin: 0 auto;

    :hover {
      opacity: 0.7;
    }
  `

  const [term, setTerm] = useState<string>('three'); //setTerm('three | six | year | else')
  const [date, setDate] = useState<[string, string]>(['20220808', '20230808']);
  const [isOpenDate, setIsOpenDate] = useState<boolean>(false);
  console.log(term);

  const set_Term = (v: string) => () => {
    setTerm(v);
    term == 'else' ? setIsOpenDate(true) : setIsOpenDate(false)
  }
  const SelectDetailTerm = () => {

  }
  return (
    <div>
      <ButtonWrap>
        <Tbutton onClick={set_Term('three')}>3개월</Tbutton>
        <Tbutton onClick={set_Term('six')}>6개월</Tbutton>
        <Tbutton onClick={set_Term('year')}>1년</Tbutton>
        <Tbutton onClick={set_Term('else')}>기타</Tbutton>
      </ButtonWrap>
      <div>
        <span>CUST_NO</span>
        <input type='text'></input>
        <button>제출</button>
      </div>
    </div>
  )
}

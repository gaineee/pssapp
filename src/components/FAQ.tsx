import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import "./FAQ.css";
import ExistingFaq from "./ExistingFaq";
import { data } from "./FAQdata";

interface Props {
  place: string;
  category: string;
}

const InputKeyword = () => {
  const InputKeywordWrap = styled.div`
    padding-left: 30px;
    padding-right: 30px;
  
    .UserInputContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .keywordform {
      width: 100%;
      font-size: 15px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    .keywordform #keyword {
      width: 100%;
      height: 30px;
      text-align: center;
      border: 1px #9c836a solid;
    }
  `;

  return (
    <InputKeywordWrap>
      <div className="UserInputContainer">
        <form className="keywordform" onSubmit={ (e) => {e.preventDefault(); }}>
          <input id="keyword" placeholder="검색하실 키워드를 입력하세요" />
          <button>img</button>
        </form>
      </div>
    </InputKeywordWrap>
  )
}

const InputPlace = () => {
  const [place, setPlace] = useState<string>("장소를 선택해 주세요");

  const [isOpenPlace, setIsOpenPlace] = useState<boolean>(false);
  const OpenPlace = () => {
    isOpenPlace==false ? setIsOpenPlace(true) : setIsOpenPlace(false)
  }

  const SetPlace = (val: string, idx: number) => () => {
    setPlace(val);
    setIsOpenPlace(false);
  }

  const InputPlaceWrap = styled.div`
    padding-left: 30px;
    padding-right: 30px;

    .categoryBox {
      height: 30px;
      padding-left: 10px;

      border: 1px #9c836a solid;
      display: center;
    }

    .categoryBox button {
      align-self: flex-end;
      margin-right: 10px;
    }

    #DropDownBoxWrap {
      position: absolute;
      padding-right: 30px;
      display: flex;
      justify-content: flex-end;
      
    }

    .DropDownList {
      position: relative;
      text-align: left;
      width: 340px;

      list-style-type : none
      padding-left: 10px;
      margin: 0 auto;
      z-index: 1;
      background: white;
      border-style: solid;
      border-color: black;
      border-width: 0px 1px 0px 1px;
    }

    .ListItem {
      width: 100%;
      padding-left: 10px;

      z-index: 1;
      list-style: none;
      overflow-x: hidden;
      overflow-y: scroll;
      border-style: solid;
      border-color: black;
      border-width: 0px 0px 1px 0px;
    }
  `

  return (
    <InputPlaceWrap>
      <div className="categoryBox">{place}<button onClick={OpenPlace}>▽</button></div>
      {isOpenPlace && (
      <div id="DropDownBoxWrap">
        <ul className="DropDownList">
          <li className="ListItem" onClick={SetPlace("PARADISE CITY", 1)}>PARADISE CITY</li>
          <li className="ListItem" onClick={SetPlace("HOTEL PARADISE", 2)}>HOTEL PARADISE</li>
          <li className="ListItem" onClick={SetPlace("HOTEL ART PARADISO", 3)}>HOTEL ART PARADISO</li>
          <li className="ListItem" onClick={SetPlace("CASINO", 4)}>CASINO</li>
        </ul>
      </div>
      )}
    </InputPlaceWrap>
  )
}

export const FAQ = () => {
  // 깃허브 커밋 git commit -m "message" / 푸쉬 git push

  const [place, setPlace] = useState<string>("HOTEL PARADISE");
  const [category, setCategory] = useState<string>("이용안내");

  const [id, setId] = useState<number>(data[0].id);
  const [p, setp] = useState<string>(data[0].place);
  const [c, setc] = useState<string>(data[0].category);
  const [q, setq] = useState<string>(data[0].question);
  const [a, seta] = useState<string>(data[0].answer);

  const FAQcontainer = styled.div`
    width: 400px;

    .article {
      margin-top: 5px;
      padding-left: 30px;
      padding-right: 30px;
    }
  `

  return (
    <FAQcontainer>
      <br/>
      <div className="article">자주 문의하는 질문에 대한 답변을<br/>확인하실 수 있습니다</div>
      <br/>
      <InputKeyword />
      <InputPlace />
      <ExistingFaq id={id} place={p} category={c} question={q} answer={a}></ExistingFaq>
      <br/>

    </FAQcontainer>
  );
};

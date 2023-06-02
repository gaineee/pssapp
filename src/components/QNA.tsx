import styled from "styled-components";
import React, { useState } from "react";
import PlaceDetail from "./PlaceDetail";
 // 깃허브 커밋 git commit -m "message" / 푸쉬 git push

 const PlaceNDetail = () => {
  const [place, setPlace] = useState<[string, number]>(["항목을 선택해 주세요", 0]);
  const [isOpenPlace, setIsOpenPlace] = useState<boolean>(false);
  console.log(place);

  const SetPlace = (pd: string, value: number) => () => {
    setPlace([pd, value]);
    setIsOpenPlace(false);
  }
  const OpenPlace = () => {
    isOpenPlace==false ? setIsOpenPlace(true) : setIsOpenPlace(false)
  }

  const InputPlaceWrap = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
  `

  const PlaceWrap = styled.div`
    display: flex;
    justify-content: space-between;
    
    #DropDownBoxWrap {
      width: 240px;
      border: 1px solid black;
      display: flex;
      padding-left: 5px;
    }
  `

  const DropDownWrap = styled.div`
    position: absolute;
    width: 400px;
    padding-right: 60px;
    display: flex;
    justify-content: flex-end;

    .DropDownList {
      width: 240px;
      height: 100%;
      z-index: 1;
      list-style-type : none

      padding-left: 10px;
      
      background: white;
      border-style: solid;
      border-color: black;
      border-width: 0px 1px 0px 1px;
    }

    .ListItem {
      position: relative;
      text-align: left;
      width: 100%;
      
      padding-left: 10px;
    
      z-index: 1;
      list-style: none;
      overflow-x: hidden;
      overflow-y: scroll;
      border-style: solid;
      border-color: black;
      border-width: 0px 0px 1px 0px;

      :hover {
        background-color: #9d896a;
        border: 1px solid gray;
        color: white;
      }
    }
  `
  const DetailWrap = styled.div`
    display: flex;
    justify-content: space-between;

    .label {
      text-align: left;
      padding-right: 10px;
    }
  `

  return (
    <InputPlaceWrap>
      <PlaceWrap>
        <span className="sisul">시설</span>
        <div id="DropDownBoxWrap" onClick={OpenPlace}>
          {place[0]}
        </div>
        </PlaceWrap>
        {isOpenPlace && (
          <DropDownWrap>
            <ul className="DropDownList">
              <li className="ListItem" onClick={SetPlace("PARADISE CITY", 1)}>PARADISE CITY</li>
              <li className="ListItem" onClick={SetPlace("HOTEL PARADISE", 2)}>HOTEL PARADISE</li>
              <li className="ListItem" onClick={SetPlace("HOTEL ART PARADISO", 3)}>HOTEL ART PARADISO</li>
              <li className="ListItem" onClick={SetPlace("CASINO", 4)}>CASINO</li>
              <li className="ListItem" onClick={SetPlace("CIMER", 5)}>CIMER</li>
              <li className="ListItem" onClick={SetPlace("CHROMA", 6)}>CHROMA</li>
              <li className="ListItem" onClick={SetPlace("WONDERBOX", 7)}>WONDERBOX</li>
              <li className="ListItem" onClick={SetPlace("PLAZA", 8)}>PLAZA</li>
              <li className="ListItem" onClick={SetPlace("PARADISE ART SPACE", 9)}>PARADISE ART SPACE</li>
              <li className="ListItem" onClick={SetPlace("STUDIO PARADISE", 10)}>STUDIO PARADISE</li>
              <li className="ListItem" onClick={SetPlace("GROUP & WEDDINGS", 11)}>GROUP & WEDDINGS</li>
              <li className="ListItem" onClick={SetPlace("MEMBERSHIP", 12)}>MEMBERSHIP</li>
            </ul>
          </DropDownWrap>
        )}
      <div style={{ height: "5px" }}></div>
      <DetailWrap>
        <label className="label">세부 시설</label>
        <PlaceDetail place={place[0]} value={place[1]} />
      </DetailWrap>
    </InputPlaceWrap>
  )
}

const Qtype = () => {
  const Text = styled.div`
    display: flex;
    margin-top: 15px;
    padding-left: 30px;
    text-align: left;
  `
  const ButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 30px 0 30px;
  `
  
  const Qbutton = styled.button`
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

  const Qarr = ['문의', '칭찬', '불만', '제안', '기타'];
  const selectType = () => {
    let $btntag = document.querySelectorAll(Qbutton);
    console.log($btntag);
    $btntag.forEach((v,i) => {
      v.classList.add('disabled');
  })
  }

  return (
    <>
      <Text>질문 유형</Text>
      <ButtonWrap>
        { Qarr.map((v,i) => 
          <Qbutton onClick={selectType}>{v}</Qbutton>
        )}
      </ButtonWrap>
    </>
  )

}

const DetailInput = () => {
  const DetailInput = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;

  `
  const PhoneInput = styled.div`
    .firstInput {
      width: 50px;
    }

    .secondInput {
      width: 50px;
    }
    .thirdInput {
      width: 50px;
    }
  `

  return (
    <DetailInput>
      <div>제목</div>
      <input type="text"></input>
      <div style={{ height: "5px" }}></div>
      <div>내용</div>
      <input type="text"></input>
      <div style={{ height: "5px" }}></div>
      <div>이름</div>
      <input type="text"></input>
      <div style={{ height: "5px" }}></div>
      <div>휴대폰 번호</div>
      <PhoneInput>
        <input className="firstInput"></input>
        <input className="secondInput"></input>
        <input className="thirdInput"></input>
      </PhoneInput>
      <div style={{ height: "5px" }}></div>
      <div>이메일 주소</div>
    </DetailInput>
  )
}

export const QNA = () => {
  const QNAWrap = styled.div`
    width: 100%;
  `

  return (
    <QNAWrap>
      <PlaceNDetail></PlaceNDetail>
      <Qtype></Qtype>
      <DetailInput></DetailInput>
    </QNAWrap>
  )
}
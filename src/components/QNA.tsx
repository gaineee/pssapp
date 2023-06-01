import styled from "styled-components";
import React, { useState } from "react";
import PlaceDetail from "./PlaceDetail";
 // 깃허브 커밋 git commit -m "message" / 푸쉬 git push


export const QNA = () => {
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
      width: 260px;
      border: 1px solid black;
      display: flex;
      padding-left: 5px;
    }
  `
  const DropDownWrap = styled.div`
    position: absolute;

    .DropDownList {
      text-align: left;
      width: 200px;

      list-style-type : none
      padding-left: 10px;
      margin: 0 auto;
      z-index: 1;
      background: white;
      border-style: solid;
      border-color: black;
      border-width: 0px 1px 0px 1px;

      .ListItem {
        position: relative;
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
        
    </PlaceWrap>
    <DetailWrap>
      <label className="label">세부 시설</label>
      <PlaceDetail place={place[0]} value={place[1]} />
    </DetailWrap>
   
    </InputPlaceWrap>
  )
}
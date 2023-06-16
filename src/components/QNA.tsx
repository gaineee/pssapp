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
  const Qarr = ['문의', '칭찬', '불만', '제안', '기타'];
  const [clickedbutton, setClickedButton] = useState<string>(Qarr[0]);
  
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

    .pushed {
      background-color: #87693c;
    }
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

  const selectType = (i: number) => () => {
    let $btntag = document.querySelectorAll(Qbutton);
    console.log($btntag);
    setClickedButton(Qarr[i])

    /* $btntag.forEach((v,idx) => {
      v.classList.add('disabled');
    })
  */
  }

  return (
    <>
      <Text>질문 유형</Text>
      <ButtonWrap>
        { Qarr.map((v,i) => 
          <Qbutton onClick={selectType(i)}
            className={ v===clickedbutton ? 'pushed' : '' }>{v}</Qbutton>
        )}
      </ButtonWrap>
    </>
  )

}

const Detail = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState(["","",""]); // len!=3이면자르기
  const [email, setEmail] = useState([]);

  const changeTitle = (e: any) => {
    setTitle(e.value);
  }

  const changeBody = (e: any) => {
    setBody(e.value);
  }

  const changeName = (e: any) => {
    setName(e.currentTarget.value);
  }

  const changePhonenum1 = (e: any) => {
    phonenum[0] = e.currentTarget.value;
  }

  const changePhonenum2 = (e: any) => {
    phonenum[1] = e.currentTarget.value;
  }

  const changePhonenum3 = (e: any) => {
    phonenum[2] = e.currentTarget.value;
  }

  const DetailInput = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;

    input {
      margin-top: 5px;
      margin-bottom: 10px;
      border: 1px solid black;
    }
    .inputTitle {
      height: 25px;
    }

    .inputBody {
      height: 100px;
    }
    .inputName {
      height: 25px;
    }
    .inputEmail {
      height: 25px;
    }

    div > input {
      height: 25px;
    }

  `
  const PhoneInput = styled.div`
    .firstInput {
      width: 80px;
    }

    .secondInput {
      width: 100px;
      margin-left: 20px;
      margin-right: 5px;
    }

    .thirdInput {
      width: 100px;
      margin-left: 5px;
      margin-right: 5px;
    }
  `

  return (
    <DetailInput>
      <div>제목</div>
      <input type="text" className="inputTitle" value={title}></input>
      
      <div>내용</div>
      <input type="text" className="inputBody" value={body} onChange={changeBody}></input>
      
      <div>이름</div>
      <input type="text" className="inputName" value={name} onChange={changeName}></input>
      
      <div>휴대폰 번호</div>
      <PhoneInput>
        <input type="text" className="firstInput" maxLength={3}></input>
        <input type="text" className="secondInput" maxLength={4}></input>
        <input type="text" className="thirdInput" maxLength={4}></input>
      </PhoneInput>
      
      <div>이메일 주소</div>
      <input type="text" className="inputEmail" value={email}></input>

    </DetailInput>
  )
}

interface param {
  title: string;
  body: string;
  name: string;
  phonenum: number[],
  email: string;
}

export const QNA = () => {
  const QNAWrap = styled.div`
    width: 100%;

    .submit {
      width: 100px;
      height: 40px;
      margin: 0 auto;

      border: 2px #9c836a solid;
      background-color: #9c836a;
      color: white;
      font-size: 14px;
    }
  `

  const submitvoc = () => {
    let param: param;

    console.log()
  }
  
  return (
    <QNAWrap>
      <PlaceNDetail></PlaceNDetail>
      <Qtype></Qtype>
      <Detail></Detail>
      <button className="submit" onClick={submitvoc}>제출하기</button>
    </QNAWrap>
  )
}
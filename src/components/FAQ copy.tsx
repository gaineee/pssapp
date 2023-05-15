import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
// import "./FAQ.css";

interface Props {
  place: string;
  category: string;
}

export const FAQ = () => {
  // 깃허브 커밋 git commit -m "message" / 푸쉬 git push

  const [place, setPlace] = useState<string>("HOTEL PARADISE");
  const [category, setCategory] = useState<string>("이용안내");

  const FAQcontainer = styled.div`
    margin-top: 16px;
    width: 100%;
  `
  return (
    <FAQcontainer>
      <br/>
      <Article>자주 문의하는 질문에 대한 답변을<br/>확인하실 수 있습니다</Article>
      <br/>
      <PlaceDropDown />
      <br/>

      <ExistingFAQ place={place} category={category}></ExistingFAQ>
      <ExistingFAQ place={place} category={category}></ExistingFAQ>
    </FAQcontainer>
  );
};

const Article = styled.p`
  max-width: 300px;
  display: flex;
  text-align: center;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 15px;
`;

const FAQcontainer = styled.div`
  margin-top: 16px;
  width: 400px;
`

const DropDownImg = styled.img<{ clicked: boolean }>`
  width: 20px;
  align-self: flex-end;
  margin-right: 10px;
  height: 25px;
  transform: ${(props) => (props.clicked ? "scaleY(-1)" : "")};
`;




const ListItem = styled.li`
position: relative;
  text-align: left;
  width: 100%;
  
  padding-left: 10px;
  z-index: 1;
  background: white;
  border-style: solid;
  border-color: black;
  border-width: 0px 1px 1px 1px;
`;

const DropDownBoxWrap = styled.div`

`;

const DropDownContainer = styled.ul`
  position: absolute;
  width: 360px;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  list-style: none;
  overflow-x: hidden;
  overflow-y: scroll;
`;


const UserInputWrap = styled.div`
  width: 400px;
  display: flex;
  `;

const UserInput = () => {
  const QAblock = styled.div`
    padding-left: 30px;
    width: 90%;
    padding: 5px 5px;
    background-color: #ffffff;
    border: 2px #9D896A solid;
    margin: 5px auto;

  `
}

const PlaceDropDown = () => {
  const KeywordForm = styled.form`
    width: 100%;
    font-weight: 80%;
    font-size: 15px;
    text-align: left;
    
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `;
  const KeyWordInput = styled.input`
    width: 100%;
    height: 30px;
    text-align: center;
    border: 1px #9D896A solid;
  `
  const DropContainer = styled.div`
    width: 90%;
    padding-left: 40px;
    padding-right: 40px;
  `;

  const CategoryMenuBox = styled.div`
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    padding-left: 10px;
  
    display: flex;
    justify-content: space-between;
    border: 1px #9D896A solid;
  `;

  const [isOpenPlace, setIsOpenPlace] = useState<boolean>(false);
  const [place, setPlace] = useState<string>("장소를 선택해 주세요");
  const [keyword, setKeyword] = useState<string>("");

  const onTogglePlace = () => {
    setIsOpenPlace(!isOpenPlace);
  }

  const onOptionPlaceClicked = (value:string, index:number) => () => {
    setPlace(value);
    setIsOpenPlace(false);
  }

  // DropContainer : div
  // CategoryMenuBox : div
  // DDWrap : div , DDContainer; ul

  return (
    <>
      <DropContainer className="ctn">
        <KeywordForm id="search-form" onSubmit={ (e) => {e.preventDefault(); }}>
          <KeyWordInput id="keyword" placeholder="검색하실 키워드를 입력하세요" />
          <button>img</button>
        </KeywordForm>

        <CategoryMenuBox onClick={onTogglePlace}>
          {place}
          <DropDownImg clicked={isOpenPlace} alt="iphone=01" src="./click.png" />
        </CategoryMenuBox>
      </DropContainer>
      {isOpenPlace && (
      <DropDownBoxWrap>
        <DropDownContainer>
            <ListItem onClick={onOptionPlaceClicked("PARADISE CITY", 1)}>
              PARADISE CITY
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("HOTEL PARADISE", 2)}>
              HOTEL PARADISE
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("HOTEL ART PARADISO", 3)}>
              HOTEL ART PARADISO
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("CASINO", 4)}>
              CASINO
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("CIMER", 5)}>
              CIMER
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("CHROMA", 6)}>
              CHROMA
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("WONDERBOX", 7)}>
              WONDERBOX
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("PLAZA", 8)}>
              PLAZA
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("PARADISE ART SPACE", 9)}>
              PARADISE ART SPACE
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("STUDIO PARADISE", 10)}>
              STUDIO PARADISE
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("GROUP & WEDDINGS", 11)}>
              GROUP & WEDDINGS
            </ListItem>
            <ListItem onClick={onOptionPlaceClicked("MEMBERSHIP", 12)}>
              MEMBERSHIP
            </ListItem>
        </DropDownContainer>
      </DropDownBoxWrap>
      )}
    </>
  )

}

const ExistingFAQ = ( {place, category}: Props ) => {
  let [active, setActive] = useState<boolean>(true); // active:true -> 감춤

  const toggleEvent = () => {
    let $tg = document.querySelector('.answer');
    //console.log(e.classList);

    if (active) {
      $tg?.classList.remove("active");
      setActive(false);
    }  else {
      $tg?.classList.add("active");
      setActive(true);
    }

  }
  const fillQA = () => {
    // API로 정보 가져올 수 있는지?
    // $tag.textContent 
  }

  // dataset 속성 OR 데이터 내에 구분자가 있는지
  return(
    <div className="QAblock" onClick={toggleEvent}>
      <div className="pre">[<span id="place">{place}</span> &gt; <span id="category">{category}</span>]<button>img</button></div>
      <div className="question">Q. 투숙 시 귀중품 보관은 어떻게 하나요?</div>
      <div className="answer">A. 귀중품은 옷장 내 비치되어 있는 금고에 보관해 주시기 바랍니다. 고가의 물품은 프론트 데스크에서 운영하는 호텔 금고를 이용해 주시기 바랍니다.</div>
    </div>
  );
};

export default PlaceDropDown;
import React, { useState } from "react";
import styled from "styled-components";
import "./ExistingFaq.css"

interface props {
  place: string,
  value: number,
}

const placeArr: string[][] = [
  [], // idx=0 제외 -> 항목을 선택해 주세요
  ['이용안내', '주의사항', '기타'],  // PARADISE CITY
  ['이용안내', '객실', 'F&B', '부대시설', '주의사항', '기타'], //'HOTEL PARADISE'
  ['이용안내', '객실', 'F&B', '부대시설', '주의사항', '기타'],
  ['이용안내', '게임안내', '멤버십', '주의사항', '기타'], // CASINO
  ['이용안내', '시설안내', '이벤트', '주의사항', '기타'], // 씨메르
  ['이용안내', '시설안내', '이벤트', '주의사항', '기타'], // 크로마
  ['이용안내', '시설안내', '이벤트', '주의사항', '기타'], // 원더박스
  ['매장안내', '시설안내', '이벤트', '기타'], // 플라자
  ['이용안내', '주의사항', '기타'], // 아트 스페이스
  ['행사/이벤트', '대관', '시설', '기타'], // studio paradise
  ['견적', '서비스', '기타'], // 웨딩
  ['가입안내', '포인트', '기타'], // 멤버십
];

/*
placeArr = {
  'PARADISE CITY': ['객실'], // 'PARADISE CITY'
  'HOTEL PARADISE': ['객실, 상품/이벤트', '시설', '다이닝', '기타'], //HOTEL PARADISE'
  //'HOTEL ART PARADISO': ['객실'],
  'CASINO': ['게임', '상품/이벤트', '카지노멤버십/포인트', '기타 서비스'],
  //'CIMER': ['상품/이벤트', 'F&B', '입장권/요금', '제휴할인', '이벤트/액티비티', '기타'],
  //'CHROMA': ['AFDS'],
} 

*/

const PlaceDetail = ( {place, value } : props)  => {
  const SelectBox = styled.select`
    width: 240px;
    height: 24px;
  `
  //console.log(placeArr[2]);
  if (value == 0) {
    return (
      <SelectBox disabled name="detail">
        <option value="default">항목을 선택해 주세요</option>
      </SelectBox>
    )
  } else {
    //let placeArr: string[] = placeArr['CASINO'];
    return (
      <SelectBox name="detail"> 
        { placeArr[value].map((v,i) =>
          <option value={i}>{v}</option>
        )}
      </SelectBox>
    )
  }
}
export default PlaceDetail;

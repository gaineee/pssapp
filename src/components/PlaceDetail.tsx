import React, { useState } from "react";
import { data } from "./FAQdata";
import styled from "styled-components";
import "./ExistingFaq.css"

interface props {
  place: string,
  value: number,
}

const placeArr: string[][] = [
  [], // idx=0 제외
  ['객실'],
  ['객실, 상품/이벤트', '시설', '다이닝', '기타'], //'HOTEL PARADISE'
  ['객실'],
  ['게임', '상품/이벤트', '카지노멤버십/포인트', '기타 서비스'], // CASINO
  ['상품/이벤트', 'F&B', '입장권/요금', '제휴할인', '이벤트/액티비티', '기타'], // 씨메르
  ['null'], // 크로마
  ['시설이용', '이벤트/액티비티', '입장권/요금', 'F&B', '제휴할인', '기타'], // 원더박스
  ['매장이용', '입점문의', '기타'], // 플라자
  ['전시', '입장권/요금', '이벤트/액티비티', '기타'], // 아트 스페이스
  ['행사/이벤트', '대관', '시설', '기타'], // studio paradise
  ['견적', '서비스', '기타'], // 웨딩
  ['파라다이스 리워즈 포인트', '파라다이스 시그니처', '크로마 VIP', '카지노', 'EVENT MEMEBERSHIP CLUB'], // 멤버십
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
    width: 260px;
  `
  //console.log(placeArr[2]);
  if (value == 0) {
    return (
      <SelectBox disabled name="detail">
        <option value="default">항목을 선택해 주세요</option>
      </SelectBox>
    )
  } else {
    //let pArr: string[] = placeArr['CASINO'];
    return (
      <SelectBox name="detail"> 
        { placeArr[value].map((v,i) =>
          <option value={v}>{v}</option>
        )}
      </SelectBox>
    )
  }
}
export default PlaceDetail;

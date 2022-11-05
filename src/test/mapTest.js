import { useState } from "react";
import styled from "styled-components";

const MapTest = () => {

  const[color, setUserList] = useState([
    {
      id: 10,
      data: "pink",
      color: "#FFCCCC",
      text: "설렘",
    },
    {
      id: 11,
      data: "blue",
      color: "#7A90E2",
      text: "슬픔",
    },
    {
      id: 12,
      data: "yellow",
      color: "#FFDF78",
      text: "기쁨",
    },
    {
      id: 13,
      data: "red",
      color: "#E5636F",
      text: "화남",
    },
    {
      id: 14,
      data: "gray",
      color: "#C4C4C4",
      text: "무기력",
    },
  ])
  console.log(color.color);
  
  return (
    <>
      Test 예제입니다
      {color.map((item) => (
        <ColorBox key={item.id}>
          <div style={{backgroundColor: item.color}}></div> {item.text}
        </ColorBox>
      ))}
    </>
  )
}

export default MapTest;

const ColorBox = styled.div`
  margin-left: 30px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 10px;

  & div {
    width: 30px;
    height: 30px;
  }
`

/*
  map을 사용해서 돌렸을 때 setState 값을 변경해버리면 스타일이 모두 변경되어서
  개별 변경이 가능하도록 하는 예제

  __ 컴포넌트를 만들어서 map 돌리는 방법 __

  text 컴포넌트를 제작해주고 맵을 돌릴 때 test 컴포넌트를 각각 돌립니다.
*/
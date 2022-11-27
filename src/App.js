import { useRecoilState } from 'recoil';
import styled from "styled-components";
import { recoilColorState } from './states/recoilColorState';
import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/modal';

function App() {
  const [recoilColor, setRecoilColor] = useRecoilState(recoilColorState);
  const defaultColor = { ...recoilColor };

  const [color, setColor] = useState(defaultColor.color);
  const [name, setName] = useState(defaultColor.name);


  useEffect(() => {
    const tmpColor = { ...recoilColor };
    console.log(tmpColor.name);
    setColor(tmpColor.color);
    setName(tmpColor.name);
  }, [recoilColor]);




  return (
      <Page background={color}>
        <TextBox name={name}>{name}</TextBox>
        <Modal/>
      </Page>
  );
}

export default App;


const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  background-color: ${(props) => props.background};
`;

const TextBox = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: ${(props) =>
    props.name === "Black" ||
    props.name === "Purple" ||
    props.name === "Blue" ||
    props.name === "DeepGreen"
      ? "white"
      : "black"};
`;


// 1. npm i recoil
// 2. <RecoilRoot> </RecoilRoot> 감싸주기
// 3. 전용저장소 atom(상태) 만들기

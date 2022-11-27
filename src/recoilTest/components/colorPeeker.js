import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"
import { recoilColorState } from "../recoilStates/recoilColorState";
import { Color } from "../resource/color";
import styled from "styled-components";


const ColorPeeker = () => {

  const [recoilColor, setRecoilColor] = useRecoilState(recoilColorState);

  const defaultColor = { ...recoilColor };  // 복사
  const colorArray = Object.values(Color);  // resource/color.js의 색상코드(values) 배열화

  const [colorState, setColorState] = useState(defaultColor.color);

  const onColorChangeHandler = (color) => {
    setColorState(color);
  };

  useEffect(() => {
    const changedColor = {
      color: colorState
    };
    setRecoilColor(changedColor);
  }, [colorState]);

  return (
    <>
      <Container>
        <ColorPallete>
          {colorArray.map((color, index) => (
            <ColorCircle key={color} background={color}>
              <label htmlFor={color}></label>
              <input
                type="radio"
                id={color}
                checked={colorState === color}
                onChange={() => onColorChangeHandler(color, index)}
              />
            </ColorCircle>
          ))}
        </ColorPallete>
        
      <ColorBox background={colorState}>
      </ColorBox>
      </Container>

    </>
  );
};

export default ColorPeeker;

const Container = styled.div`
  width: 1080px;
  height: 900px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: white;
`;


const ColorPallete = styled.ul`
  display: flex;
  width: 300px;
  height: 80px;
  margin: 0 auto;
  justify-content: center;
  padding-top: 20px;
  background-color: white;
  gap: 15px;
`;

const ColorCircle = styled.li`
  list-style-type: none;
  
  & > label {
    display: inline-block;
    background-color: ${(props) => props.background};
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.25s;
  }

  & > label:hover {
    transform: scale(1.15);
  }

  & > input {
    display: none;
  }
`;

const ColorBox = styled.div`
  width: 500px;
  height: 350px;
  background-color: ${(props) => props.background};
  margin: 0 auto;
`;

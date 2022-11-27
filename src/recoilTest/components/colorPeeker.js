import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"
import { recoilColorState } from "../recoilStates/recoilColorState";
import { recoilThemeState } from "../recoilStates/recoilThemeState"
import { Color } from "../resource/color";
import styled from "styled-components";


const ColorPeeker = () => {

  const [recoilTheme, setRecoilTheme] = useRecoilState(recoilThemeState);
  const [recoilColor, setRecoilColor] = useRecoilState(recoilColorState);

  const defaultColor = { ...recoilColor };
  const tmpState = { ...recoilTheme };
  const tmpColor = { ...recoilColor };

  console.log(recoilColor);

  const colorArray = Object.values(Color);

  const [themeState, setThemeState] = useState(colorArray);
  const [colorState, setColorState] = useState(defaultColor.color);

  
  useEffect(() => {
    if (tmpState.theme === "Color") {
      setThemeState(colorArray);
      onColorChangeHandler(Color[0],0);
    }
  },[recoilTheme]);

  useEffect(() => {
    setColorState(tmpColor.color);
  }, [recoilColor]);

  console.log(tmpColor);

  const onColorChangeHandler = (color) => {
    setColorState(color);
  }

  useEffect(() => {
    const changedColor = {
      color: colorState,
    };
    setRecoilColor(changedColor);
  }, [colorState]);

  return (
    <>
      <Container>
        <ColorPallete>
          {themeState.map((color, index) => (
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
        
      </Container>
      
      <ColorBox background={colorState}>
      </ColorBox>
    </>
  );
};

export default ColorPeeker;


const ColorBox = styled.div`
  width: 700px;
  height: 350px;
  background-color: ${(props) => props.background};
  margin: 0 auto;
`;


const Container = styled.div`
  width: 600px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background-color: white;
`;

const ColorPallete = styled.ul`
  display: flex;
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
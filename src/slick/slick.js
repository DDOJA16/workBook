import styled from "styled-components"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickTest = () => {

  const settings = {
    dots: true,
    arrow: true,
    speed: 500,
    infinite: true,
  }

  return (
    <>
      <Container>
      <h1>Slick Test</h1>
        <SlideWrap>
          <StyledSlider {...settings}>
            <div>
              1
              <div className="boxWrap">
                <div className="box">1-1</div>
                <div className="box">1-2</div>
                <div className="box">1-3</div>
                <div className="box">1-4</div>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </StyledSlider>
        </SlideWrap>
      </Container>
    </>
  )
}

export default SlickTest;

const Container = styled.div`
  width: 800px;
  height: 600px;
  background-color: white;
  border: 3px solid #7A90E2; 
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;

  & h1 {
    padding-top: 20px;
  }

  & div:nth-child(2) {
    width: 600px;
    height: 400px;
    background-color: #7A90E2;
    
    & .boxWrap {
      width: fit-content;
      margin: 0 auto;
      margin-top: 22px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    & .box {
      width: 250px;
      height: 150px;
      background-color: white;
    }
  }
  
  & div:nth-child(3) {
    width: 600px;
    height: 400px;
    background-color: #FFDF78;
  }

  & div:nth-child(4) {
    width: 600px;
    height: 400px;
    background-color: #E5636F;
  }
  
  & div:nth-child(5) {
    width: 600px;
    height: 400px;
    background-color: #FFCCCC;
  }
`

const SlideWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
`

const StyledSlider = styled(Slider)`

  & .slick-prev {
    width: 15px;
    height: 15px;
    color: red;

    ::before {
      content: url(./images/angle-left-solid.svg);
    }
  }

  & .slick-next {
    width: 15px;
    height: 15px;
    ::before {
      content: url(./images/angle-right-solid.svg);
    }
  }
`





import styled from "styled-components"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";

const SlickMap = () => {

  const [list, setList] = useState([
    {
      id: 15,
      date: "2022.09.30",
      title: "일기 제목 보이기",
      color: "#FFCCCC",
    },
    {
      id: 16,
      date: "2022.09.27",
      title: "일기 제목 보이기",
      color: "#C4C4C4",
    },
    {
      id: 17,
      date: "2022.09.23",
      title: "일기 제목 보이기",
      color: "#FFDF78",
    },
    {
      id: 18,
      date: "2022.09.22",
      title: "일기 제목 보이기",
      color: "#7A90E2",
    },
    {
      id: 19,
      date: "2022.09.22",
      title: "일기 제목 보이기",
      color: "#FFDF78",
    },
  ])

  const settings = {
    dots: true,
    arrow: true,
    speed: 500,
    infinite: true,
    rows: 2,
    slidesPerRow: 2,
    // centerMode : true,
  }

  return (
    <>
      <MapTest>
        <h1>Slick Map Test</h1>
          <Slider {...settings}>
            {list.map((item) => (
              <div className="listBox" key={item.id}>
                <div className="listItem"style={{backgroundColor: item.color}}>
                  <div className="content">
                    <p>{item.date}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
              ))}
            </Slider>
        </MapTest>
    </>
  )
}

export default SlickMap;



const MapTest = styled.div`
  width: 800px;
  height: 600px;
  background-color: white;
  border: 3px solid #7A90E2; 
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  overflow: hidden;

  & h1 {
  padding: 30px 0;

  }

  & .listBox {
    margin: 10px auto;
    width: 200px;
    height: 200px;
    
  }

  & .listItem {
    width: 200px;
    height: 200px;
    margin: 0 auto;

    & .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      
      p {
        margin: 0 auto;
      }
    }
  }

`
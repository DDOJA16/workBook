import SlickMap from "./slickMap";
import SlickTest from "./slick";
import styled from "styled-components";


const Slick = () => {

  return (
    <>
      <Container>
        <SlickTest/>
        <SlickMap/>
      </Container>
    </>
  )
}

export default Slick;

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`
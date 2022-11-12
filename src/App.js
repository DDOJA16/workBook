import './App.css';
import MapTest from './test/mapTest';
import Slick from './test/sideBarTest/pages/slick';
import SlickMap from './test/slickMap';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sidebar from './test/sideBarTest/sideBar';
import styled from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Sidebar/>
          <Routes>
            <Route path="/threepage" element={<Slick/>}/>
            <Route path="/fourpage" element={<SlickMap/>}/>
            <Route path="/fivepage" element={<MapTest/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;


const Container = styled.div`
  display: flex;
`
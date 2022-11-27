import './App.css';
import Slick from './slick/_index';
import MapTest from './test/mapTest';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sidebar from './test/sideBarTest/sideBar';
import styled from 'styled-components';
import ColorPeeker from './recoilTest/components/colorPeeker';
import GlobalSytle from './css/globalStyle';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalSytle/>
        <Container>
          <Sidebar/>
          <Routes>
            <Route path="/slickpage" element={<Slick/>}/>
            <Route path="/fivepage" element={<MapTest/>}/>
            <Route path="/colorPeeker" element={<ColorPeeker/>}/>
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
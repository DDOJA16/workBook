import SidebarItem from "./sideBarItem";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faEllipsis, faFillDrip, faComputerMouse } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {

  const pathName = useLocation().pathname;

  const menus = [
    { 
      id: "page1",
      name: "slick", 
      path: "/slickpage",
      icon: <FontAwesomeIcon icon={faEllipsis}/>
    },
    { 
      id: "page2",
      name: "colorPeeker", 
      path: "/colorPeeker", 
      img: "./images/list-check.svg",
      icon: <FontAwesomeIcon icon={faFillDrip}/>
    },
    { 
      id: "page3",
      name: "drag and drop", 
      path: "/DND",
      icon: <FontAwesomeIcon icon={faComputerMouse}/>
    },
    { 
      id: "page4",
      name: "...", 
      path: "/fivepage",
      icon: <FontAwesomeIcon icon={faBook}/>
    },
  ]

  const isColor = 
    pathName === "/slickpage" ? "#E5636F"
    : ( pathName === "/colorPeeker" ? "#7A90E2"
    : pathName === "/DND" ? "#FFCCCC" : "#C4C4C4")

  return (
    <>
      <SidebarContainer>
        {menus.map((menu) => {
          return (
            <div className="iconWrap">
              <SLink to={menu.path} key={menu.id}>
                <SidebarItem
                  menu={menu}
                  isActive={pathName === menu.path ? true : false}
                  // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                  isColor= {isColor}
                />
              </SLink>
            </div>
          );
        })}
      </SidebarContainer>
    </>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 300px;
  height: 1080px;
  border: 2px solid aqua;

  & .iconWrap {
    width: 250px;
    height: 50px;
    margin: 20px auto;
    border-radius: 15px;
  }
`

const SLink = styled(Link)`
  color: #545454;
`
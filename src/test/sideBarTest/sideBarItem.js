import styled from "styled-components";

const SidebarItem = ({ menu, isActive, isColor }) => {

  // 아이콘 개별 사이즈 조절
  const secondIconSize = 
    menu.name === "colorPeeker" && "24px"

  return isActive === true? (
    <SidebarItems>
      <div 
        className="active iconBox"
        style={{backgroundColor: isColor}}
      >
        <span className="iconSize" style={{fontSize: secondIconSize}}>
          {menu.icon}
        </span>
        <p>{menu.name}</p>
      </div>
    </SidebarItems>
    ) : (
      <SidebarItems>
        <div className="defalt iconBox">
            <span className="iconSize" style={{fontSize: secondIconSize}}>{menu.icon}
          </span>
          <p>{menu.name}</p>
        </div>
      </SidebarItems>
    )
    // style={{fontSize: secondIconSize}}
}

export default SidebarItem;

const SidebarItems = styled.div`
  width: 250px;
  height: 50px;

  & .iconBox {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    
  & span {
    font-size: 25px;
    margin-left: 40px;
    margin-bottom: 2px;
  }

    & p {
      position: absolute;
      left: 90px;
      margin: 0 0 4px 20px;
    }
  }

  .active {
    color: white;
  }
`

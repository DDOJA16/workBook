import ColorPeeker from "./colorPeeker";
import styled from "styled-components";

const ModalBox = styled.div`
  padding: 30px 40px 20px 40px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default function Modal() {
  return (
    <ModalBox>
      <ColorPeeker />
    </ModalBox>
  );
}

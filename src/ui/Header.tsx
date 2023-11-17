import { ReactNode } from "react";
import styled from "styled-components";

type HeaderProps = {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      { props.children }
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${props => `${props.theme.colors.white}`};;
  color: #000;
  border-bottom: 1px solid ${props => `${props.theme.colors.lightGrey}`};
  font-size: 20px;
`

export default Header;
import React from "react";
import styled from "styled-components";

import Username from "../ui/Username";

import { useAppSelector } from "../hooks/hook";

const MainPageUsername: React.FC = () => {
  const user = useAppSelector((state) => state.authentication.user);

  return (
    <StyledMainPageUsername>
      {user.email}
    </StyledMainPageUsername>
  )
};

const StyledMainPageUsername = styled(Username)`
  margin-right: auto;
  margin-left: 30px; 
`

export default MainPageUsername;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Username from "../ui/Username";

import { getUserFromLocaleStorage } from "../utils/helper";

const MainPageUsername: React.FC = () => {
  const [user, setUser] = useState("User");

  useEffect(() => {
    setUser(() => getUserFromLocaleStorage());
  }, []);

  return (
    <StyledMainPageUsername>
      {user}
    </StyledMainPageUsername>
  )
};

const StyledMainPageUsername = styled(Username)`
  margin-right: auto;
  margin-left: 30px; 
`

export default MainPageUsername;

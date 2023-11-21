import React from "react";
import styled from "styled-components";

import { useAppDispatch } from "../hooks/hook";

import LinkButton from "../ui/LinkButton";

import { logout } from "../features/authentication/authentificationSlice";

type LogoutButtonProps = {
  children: React.ReactNode,
}

const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <StyledLinkButton onClick={handleLogout} to="/login">
      {props.children}
    </StyledLinkButton>
  )
};

const StyledLinkButton = styled(LinkButton)`
  margin-right: 30px;
  margin-left: 30px;
`
export default LogoutButton;

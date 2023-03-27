import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPagesStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NotFoundPages = () => {
  return (
    <NotFoundPagesStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">Oops! Page not found</h1>
    </NotFoundPagesStyles>
  );
};

export default NotFoundPages;

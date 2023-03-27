import React, { Children } from "react";
import styled, { css } from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  height: ${(props) => props.height || "70px"};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
/**
 *
 * @param {string} type Type of 'button' | :'submit'
 * @returns
 */

const Button = ({
  type = "button",
  onclick = () => {},
  children,
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} state={{ display: "inline-block" }}>
        <ButtonStyled type={type} kind={kind} onclick={onclick} {...props}>
          {child}
        </ButtonStyled>
      </NavLink>
    );
  }
  return (
    <ButtonStyled type={type} kind={kind} onclick={onclick} {...props}>
      {child}
    </ButtonStyled>
  );
};

Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]),
  isLoading: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;

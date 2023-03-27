import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: bold;
  line-height: 1.5;
  a {
    display: block;
  }
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
  ${(props) =>
    props.type === "primary" &&
    css`
      color: white;
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      color: ${(props) => props.theme.gray23}; ;
    `};
`;

const PostTitle = ({
  children,
  className = "",
  type = "primary",
  size = "big",
  to = "/",
}) => {
  return (
    <PostTitleStyles size={size} type={type} className={className}>
      <NavLink to={to}>{children}</NavLink>
    </PostTitleStyles>
  );
};

export default PostTitle;

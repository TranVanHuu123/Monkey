import { Button } from "component/button";
import React from "react";
import styled from "styled-components";

const HomeBanerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .banner-content {
    color: white;
    max-width: 400px;
  }
`;

const HomeBaner = () => {
  return (
    <HomeBanerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1>Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <Button kind="secondary" to="/sign-up">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="./banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBanerStyles>
  );
};

export default HomeBaner;

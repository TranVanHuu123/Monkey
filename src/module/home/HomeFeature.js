import Heading from "component/layout/Heading";
import PostFeatureItem from "module/post/PostFeatureItem";
import React from "react";
import styled from "styled-components";
const HomeFeatureStyles = styled.div`
  margin-top: 80px;
`;

const HomeFeature = () => {
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
          <PostFeatureItem></PostFeatureItem>
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;

import Header from "component/layout/Header";
import Layout from "component/layout/Layout";
import HomeBaner from "module/home/HomeBaner";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";

import React from "react";
import styled from "styled-components";

const HomePagesStyles = styled.div``;
const HomePages = () => {
  return (
    <HomePagesStyles>
      <Layout>
        <HomeBaner></HomeBaner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePagesStyles>
  );
};

export default HomePages;

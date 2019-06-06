import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  padding-left: 15px;
  /* background: green; */
  .carouselImg {
    width: 100%;
    height: 100%;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding-top: 30px;
  margin-left: 40px;
  background: red;
`;

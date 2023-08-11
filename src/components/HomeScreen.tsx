/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import CardContainer from "./home/card/CardContainer";
import FloatButtonContainer from "./home/floatButton/FloatButtonContainer";
import HomeSearchContainer from "./home/search/HomeSearchContainer";

export default function HomeScreen() {
  const home = css`
    // width: 100vw;
    // height: 100vh;
  `;

  const appBar = css`
    position: sticky;
    height: 8vh;
    top: 0;
    background: #8a4baf;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  `;

  return (
    <div css={home}>
      <HomeSearchContainer />
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <FloatButtonContainer />
    </div>
  );
}

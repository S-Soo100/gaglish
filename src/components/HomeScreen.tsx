/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import CardContainer from "./home/card/CardContainer";
import FloatButtonContainer from "./home/floatButton/FloatButtonContainer";
import HomeAppBarContainer from "./home/appBar/HomeAppBarContainer";

export default function HomeScreen() {
  const home = css`
    // width: 100vw;
    // height: 100vh;
  `;

  return (
    <section css={home}>
      <HomeAppBarContainer />
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <CardContainer title="Query" content="어려워"></CardContainer>
      <FloatButtonContainer />
    </section>
  );
}

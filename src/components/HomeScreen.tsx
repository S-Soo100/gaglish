/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import Card from "./Card";

export default function HomeScreen() {
  const home = css`
    width: 100vw;
    height: 100vh;
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
      <div css={appBar}>
        <span>app bar</span>
      </div>
      <Card title="Query" content="어려워"></Card>
      <Card title="Query" content="어려워"></Card>
      <Card title="Query" content="어려워"></Card>
      <Card title="Query" content="어려워"></Card>
    </div>
  );
}

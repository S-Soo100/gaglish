/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";

export default function HomeScreen() {
  const home = css`
    width: 50vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: darkgreen;
    color: turquoise;
  `;

  return <div css={home}>HomeScreen</div>;
}

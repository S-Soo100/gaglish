/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function HomeSearchView() {
  /* App Bar 스타일 */
  const appBarStyle = css`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    background: #2eb67d;
    text-align: center;
    color: white;
  `;

  const searchBorderStyle = css`
    background-color: white;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    border: solid 2px;
    border-color: white;
    border-radius: 4rem;
    padding: 0px 8px 0px 24px;
  `;

  const searchInputStyle = css`
    width: 16rem;
    height: 2.5rem;
    display: flex;
    border: none;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 24px;
  `;

  const searchButtonStyle = css`
    background-color: #2eb67d;
    justify-content: center;
    text-align: center;
    color: #fff;
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 4rem;
    cursor: pointer;
    &:hover {
      background-color: #166745;
    }
  `;

  return (
    <section css={appBarStyle}>
      <div css={searchBorderStyle}>
        <input type="text" css={searchInputStyle} />
        <button css={searchButtonStyle}>
          <AiOutlineSearch
            css={css`
              font-size: 24px;
            `}
          />
        </button>
      </div>
    </section>
  );
}

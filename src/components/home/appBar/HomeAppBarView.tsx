/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function HomeAppBarView() {
  /* App Bar 스타일 */
  const appBarStyle = css`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10rem;
    background: #2eb67d;
    text-align: center;
    color: white;
  `;

  const loginStateStyle = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  `;

  const rightSectionStyle = css`
    display: flex;
    align-items: center;
    border: solid 1px white;
    padding: 0.5rem;
    margin-right: 0.5rem;
    &:hover {
      background-color: #166745;
    }
  `;

  const loginButtonStyle = css`
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
  `;

  const userInfoStyle = css`
    display: flex;
    align-items: center;
  `;

  const logoutButtonStyle = css`
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    margin-left: 10px;
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

  const isLoggedIn = false;
  const handleLogout = () => {};
  const handleLogin = () => {};

  return (
    <section css={appBarStyle}>
      <div css={loginStateStyle}>
        <div>GaeGlish</div>
        <div css={rightSectionStyle}>
          {isLoggedIn ? (
            <div css={userInfoStyle}>
              <span>Welcome, User123</span>
              <button css={logoutButtonStyle} onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button css={loginButtonStyle} onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
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

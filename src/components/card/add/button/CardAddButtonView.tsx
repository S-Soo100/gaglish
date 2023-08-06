'use client';

import { css } from '@emotion/react';

export default function CardAddButtonView() {
  const buttonSytles = css`
    width: 274px;
    height: 51px;
    border-radius: 16px;
    background-color: #2eb67d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  `;

  return (
    <div css={buttonSytles}>
      <span>submit</span>
    </div>
  );
}

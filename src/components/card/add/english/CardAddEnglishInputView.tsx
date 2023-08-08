'use client';

import { css } from '@emotion/react';

export default function CardAddEnglishInputView() {
  const inputStyles = css`
    width: 340px;
    height: 72px;
    font-size: 20px;
    border-width: 1px;
    border-radius: 10px;
    background-color: white;
    font-weight: 700;
  `;

  return <input type="text" css={inputStyles} />;
}

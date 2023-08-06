import { css } from '@emotion/react';

export default function CardAddMeaningInputView() {
  const inputStyles = css`
    width: 340px;
    height: 188px;
    font-size: 20px;
    border-width: 1px;
    border-radius: 10px;
    background-color: white;
  `;

  return <input type="text" css={inputStyles} />;
}

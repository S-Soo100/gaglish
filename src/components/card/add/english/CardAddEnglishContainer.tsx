'use client';

import { css } from '@emotion/react';
import CardAddTitleView from '../CardAddTitleView';
import CardAddEnglishInputView from './CardAddEnglishInputView';

export default function CardAddEnglishContainer() {
  const englishStyles = css`
    display: flex;
    flex-direction: column;
    margin-top: 19px;
    margin-bottom: 11px;
  `;

  const titleProps = {
    title: '영문',
  };

  return (
    <div css={englishStyles}>
      <CardAddTitleView {...titleProps} />
      <CardAddEnglishInputView />
    </div>
  );
}

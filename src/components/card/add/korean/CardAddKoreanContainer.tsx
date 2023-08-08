'use client';

import { css } from '@emotion/react';
import CardAddTitleView from '../CardAddTitleView';
import CardAddKoreanInputView from './CardAddKoreanInputView';

export default function CardAddKoreanContainer() {
  const koreanStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
  `;

  const titleProps = {
    title: '한글 뜻',
  };

  return (
    <div css={koreanStyles}>
      <CardAddTitleView {...titleProps} />
      <CardAddKoreanInputView />
    </div>
  );
}

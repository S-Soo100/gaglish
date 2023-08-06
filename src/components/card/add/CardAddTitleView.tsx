'use client';

import { css } from '@emotion/react';

type Props = {
  title: string;
};

export default function CardAddTitleView({ title }: Props) {
  const fontStyles = css`
    font-size: 20px;
    font-weight: 700;
  `;

  return <span css={fontStyles}>{title}</span>;
}

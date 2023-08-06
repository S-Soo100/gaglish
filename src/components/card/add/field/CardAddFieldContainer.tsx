import { css } from '@emotion/react';
import CardAddTitleView from '../CardAddTitleView';
import CardAddFieldItemListContainer from './CardAddFieldItemListContainer';

export default function CardAddFieldContainer() {
  const fieldStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
  `;

  const titleProps = {
    title: '개발 분야',
  };

  return (
    <div css={fieldStyles}>
      <CardAddTitleView {...titleProps} />
      <CardAddFieldItemListContainer />
    </div>
  );
}

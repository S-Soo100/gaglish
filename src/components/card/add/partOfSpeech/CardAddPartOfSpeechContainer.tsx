import { css } from '@emotion/react';
import CardAddTitleView from '../CardAddTitleView';
import CardAddPartOfSpeechItemListContainer from './CardAddPartOfSpeechItemListContainer';

export default function CardAddPartOfSpeechContainer() {
  const partOfSpeechStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
  `;

  const titleProps = {
    title: '품사',
  };

  return (
    <div css={partOfSpeechStyles}>
      <CardAddTitleView {...titleProps} />
      <CardAddPartOfSpeechItemListContainer />
    </div>
  );
}

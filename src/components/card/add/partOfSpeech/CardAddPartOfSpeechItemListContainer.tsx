import { css } from '@emotion/react';
import CardAddPartOfSpeechItemView from './CardAddPartOfSpeechItemView';
import { partOfSpeechList } from './partOfSpeechList';

export default function CardAddPartOfSpeechItemListContainer() {
  const filedListStyles = css`
    display: flex;
    width: 346px;
    flex-wrap: wrap;
    grid-row-gap: 10px;
  `;

  return (
    <ol css={filedListStyles}>
      {partOfSpeechList.map((item, index) => (
        <CardAddPartOfSpeechItemView key={index} content={item} />
      ))}
    </ol>
  );
}

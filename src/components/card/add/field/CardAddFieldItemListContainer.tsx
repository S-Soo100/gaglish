import { css } from '@emotion/react';
import CardAddFieldItemView from './CardAddFieldItemView';
import { filedList } from './filedList';

export default function CardAddFieldItemListContainer() {
  const filedListStyles = css`
    display: flex;
    width: 346px;
    flex-wrap: wrap;
  `;

  return (
    <ol css={filedListStyles}>
      {filedList.map((item, index) => (
        <CardAddFieldItemView key={index} content={item} />
      ))}
    </ol>
  );
}

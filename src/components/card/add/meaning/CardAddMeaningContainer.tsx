import { css } from '@emotion/react';
import CardAddTitleView from '../CardAddTitleView';
import CardAddMeaningInputView from './CardAddMeaningInputView';

export default function CardAddMeaningContainer() {
  const koreanStyles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;
  `;

  const titleProps = {
    title: '개발 뜻(nullable)',
  };

  return (
    <div css={koreanStyles}>
      <CardAddTitleView {...titleProps} />
      <CardAddMeaningInputView />
    </div>
  );
}

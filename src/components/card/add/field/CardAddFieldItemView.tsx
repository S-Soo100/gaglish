import { css } from '@emotion/react';
type Props = {
  content: string;
};

export default function CardAddFieldItemView({ content }: Props) {
  const itemViewStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77px;
    height: 31px;
    border-width: 1px;
    border-radius: 10px;
    border-color: #000000;
    font-size: 12px;
    font-weight: 700;
  `;

  return (
    <div css={itemViewStyles}>
      <span>{content}</span>
    </div>
  );
}

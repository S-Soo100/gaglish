/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
type Props = {
  title: string;
  content: string;
};

const cardStyles = css`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0.1, 0.2);
  padding: 16px;
  margin: 16px;
`;

const titleStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const contentStyles = css`
  font-size: 16px;
  color: #333333;
`;

export default function CardView({ title, content }: Props) {
  return (
    <div css={cardStyles}>
      <h2 css={titleStyles}>{title}</h2>
      <p css={contentStyles}>{content}</p>
    </div>
  );
}

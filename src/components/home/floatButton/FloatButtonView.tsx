/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import Link from "next/link";

type Props = {
  link: string;
};

export default function FloatButtonView({ link }: Props) {
  const floatButton = css`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #2eb67d;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 15px 20px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
      background-color: #166745;
    }
  `;

  return (
    <Link css={floatButton} href={link}>
      +
    </Link>
  );
}

"use client";
import CardView from "./CardView";
type Props = {
  title: string;
  content: string;
};

const CardContainer = ({ title, content }: Props) => {
  const cardViewProps = {
    title,
    content,
  };
  return <CardView {...cardViewProps} />;
};

export default CardContainer;

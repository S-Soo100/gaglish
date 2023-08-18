"use client";
import FloatButtonView from "./FloatButtonView";

const floatButtonProp = {
  link: "/card/add",
};

export default function FloatButtonContainer() {
  return <FloatButtonView {...floatButtonProp} />;
}

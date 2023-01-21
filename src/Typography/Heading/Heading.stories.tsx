import { ComponentMeta } from "@storybook/react";
import { Heading as Component } from "./Heading";

export default {
  title: "Typography",
  component: Component,
} as ComponentMeta<typeof Component>;

export function HeadingStory(args) {
  return (
    <>
      <div style={{ background: "#888", height: "20px" }} />
      <Component {...args}>
        Quantum Entanglement of Fluctuating Fields
      </Component>
      <div style={{ background: "#888", height: "100px" }} />
    </>
  );
}

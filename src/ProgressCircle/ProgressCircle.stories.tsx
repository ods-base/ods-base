import { ComponentMeta } from "@storybook/react";
import { ProgressCircle as Component } from "./ProgressCircle";

export default {
  title: "ProgressCircle",
  component: Component,
  argTypes: {
    isIndeterminate: {
      type: "boolean",
    },
    value: {
      type: "number",
    },
    minValue: {
      type: "number",
    },
    maxValue: {
      type: "number",
    },
  },
} as ComponentMeta<typeof Component>;

export function ProgressCircle(args, globals) {
  const { colorMode } = globals.globals;

  return (
    <div style={{ color: colorMode.match(/light/) ? "#000" : "#fff" }}>
      <Component {...args} />
    </div>
  );
}

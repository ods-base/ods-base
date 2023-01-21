import { ComponentMeta } from "@storybook/react";
import { Button as Component } from "./Button";

export default {
  title: "Button",
  component: Component,
  argTypes: {
    onPress: {
      action: "pressed",
      table: {
        disable: true,
      },
    },
    isDisabled: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Component>;

export function Button(args) {
  if (args.intent?.match(/black|white/i)) {
    return (
      <div style={{ padding: "20px", backgroundColor: "#888" }}>
        <Component {...args}>Example Button</Component>
      </div>
    );
  }

  return <Component {...args}>Example Button</Component>;
}

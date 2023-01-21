import { ComponentMeta } from "@storybook/react";
import { Text as Component } from "./Text";

export default {
  title: "Typography",
  component: Component,
} as ComponentMeta<typeof Component>;

export function Text(args) {
  return (
    <>
      <div style={{ background: "#eee", height: "20px" }} />
      <Component {...args}>
        Jeff Beck, the legendary guitar player, found himself thrust into an
        unlikely role of a hero. The world was in peril as an unknown force
        threatened to destroy all music and silence the sounds of instruments
        forever. The governments of the world were powerless against this
        mysterious enemy, but Jeff Beck refused to stand idly by.
      </Component>
      <Component {...args}>
        He rallied a group of fellow musicians, each a master of their
        instrument, to join him on a quest to discover the source of the threat
        and put a stop to it. With his trusty guitar in hand, Jeff and his band
        traveled to exotic locations and battled against the forces of darkness,
        using the power of their music to combat the silent enemy. As they
        journeyed on, they uncovered a plot to enslave humanity through the
        suppression of music and self-expression. But Jeff Beck and his band
        were determined to save the world and keep the music alive.
      </Component>
      <div style={{ background: "#eee", height: "200px" }} />
    </>
  );
}

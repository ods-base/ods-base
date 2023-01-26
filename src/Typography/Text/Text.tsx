import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import styles from "../Typography.module.css";
import { OCComponentPropsAnd } from "../../types";
import { Slot } from "@radix-ui/react-slot";

const textVariants = cva(styles.text, {
  variants: {
    fontStyle: {
      serif: styles.serif,
      sansSerif: styles.sansSerif,
    },
    weight: {
      default: styles.textWeightDefault,
      heavy: styles.textWeightHeavy,
    },
    size: {
      xxs: styles.textSizeXXS,
      xs: styles.textSizeXS,
      s: styles.textSizeS,
      m: styles.textSizeM,
      l: styles.textSizeL,
      xl: styles.textSizeXL,
      xxl: styles.textSizeXXL,
      xxxl: styles.textSizeXXXL,
    },
    color: {
      bright: styles.textColorBright,
      normal: styles.textColorNormal,
      subtle: styles.textColorSubtle,
      accent: styles.textColorAccent,
    },
  },
  defaultVariants: {
    fontStyle: "sansSerif",
    weight: "default",
    size: "m",
    color: "normal",
  },
});

type ValidElement = "a" | "div" | "span" | "p" | "li" | "ul";

export type TextProps<As extends ValidElement> = ComponentPropsWithoutRef<As> &
  VariantProps<typeof textVariants> & {
    as?: As;
    asChild?: boolean;
    children?: ReactNode;
  };

function Text<As extends ValidElement = "span">(
  {
    as,
    asChild,
    children,
    style,
    className,

    // variant props
    fontStyle,
    weight,
    size,
    color,

    // additional component props
    ...componentProps
  }: OCComponentPropsAnd<TextProps<As>>,
  ref: ForwardedRef<As>
) {
  const Component = asChild ? Slot : as || ("span" as ElementType);
  const classes = textVariants({ className, fontStyle, weight, size, color });
  return (
    <Component {...componentProps} style={style} className={classes} ref={ref}>
      {children}
    </Component>
  );
}

const _Text: typeof Text = forwardRef(Text);
export { _Text as Text };

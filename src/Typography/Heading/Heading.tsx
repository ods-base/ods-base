import { ElementType, forwardRef, RefObject } from "react";
import { cva, VariantProps } from "class-variance-authority";
import styles from "../Typography.module.css";
import { OCParentComponentPropsAnd } from "../../types";

const headingVariants = cva(styles.heading, {
  variants: {
    fontStyle: {
      serif: styles.serif,
      sansSerif: styles.sansSerif,
    },
    weight: {
      light: styles.headingWeightLight,
      default: styles.headingWeightDefault,
      heavy: styles.headingWeightHeavy,
    },
    size: {
      xxs: styles.headingSizeXXS,
      xs: styles.headingSizeXS,
      s: styles.headingSizeS,
      m: styles.headingSizeM,
      l: styles.headingSizeL,
      xl: styles.headingSizeXL,
      xxl: styles.headingSizeXXL,
      xxxl: styles.headingSizeXXXL,
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
    color: "bright",
  },
});

interface CustomHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HeadingProps
  extends VariantProps<typeof headingVariants>,
    CustomHeadingProps {}

function Heading(
  {
    level = 3,
    children,
    style,
    className,
    ...variantProps
  }: OCParentComponentPropsAnd<HeadingProps>,
  ref: RefObject<HTMLHeadingElement>
) {
  const HeadingTag = `h${level}` as ElementType;
  const classes = headingVariants({ className, ...variantProps });
  return (
    <HeadingTag style={style} className={classes} ref={ref}>
      {children}
    </HeadingTag>
  );
}

const _Heading = forwardRef(Heading);
export { _Heading as Heading };

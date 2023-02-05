import { AriaButtonProps, useButton } from "react-aria";
import { forwardRef, RefObject, useRef } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";
import styles from "./Button.module.css";
import { FocusRing } from "../FocusRing/FocusRing";
import { ProgressCircle } from "../ProgressCircle/ProgressCircle";
import { OCComponentPropsAnd } from "../types";
import { Slot } from "@radix-ui/react-slot";

const spinnerSizes = {
  s: 16,
  m: 20,
  l: 24,
};

const buttonVariants = cva(styles.button, {
  variants: {
    intent: {
      accent: styles.accent,
      primary: styles.primary,
      secondary: styles.secondary,
      destroy: styles.destroy,
      white: styles.white,
      black: styles.black,
      whiteTransparent: [styles.transparent, styles.white],
      blackTransparent: [styles.transparent, styles.black],
    },
    size: {
      s: styles.small,
      m: styles.medium,
      l: styles.large,
    },
    displayType: {
      fill: styles.fill,
      outline: null,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "m",
    displayType: "fill",
  },
});

interface CustomButtonProps {
  pending?: boolean;
  asChild?: boolean;
}

export interface ButtonProps
  extends CustomButtonProps,
    AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

function Button(
  {
    pending,
    size = "m",
    intent = "primary",
    displayType = "fill",
    children,
    className,
    style,
    asChild,
    ...props
  }: OCComponentPropsAnd<ButtonProps>,
  ref: RefObject<HTMLButtonElement>
) {
  const defaultRef = useRef(null);
  const defaultedRef = ref || defaultRef;
  const { buttonProps } = useButton(props, defaultedRef);
  if (pending) {
    buttonProps.onClick = null;
    buttonProps.onMouseDown = null;
    buttonProps.onPointerDown = null;
  }

  const classes = buttonVariants({
    size,
    intent,
    displayType,
    className: pending ? styles.isPending : null,
  });

  const Component = asChild ? Slot : "button";

  return (
    <FocusRing
      focusClass={styles.focusRing}
      focusRingClass={styles.focusRingKeyboard}
    >
      <Component
        {...buttonProps}
        style={style}
        className={cx(classes, className)}
        ref={defaultedRef}
      >
        {asChild ? (
          children
        ) : (
          <>
            <div className={styles.pendingIndicator}>
              <ProgressCircle
                label="Pending"
                isIndeterminate
                size={spinnerSizes[size]}
                thickness={1}
              />
            </div>
            <div className={styles.buttonBody}>{children}</div>
          </>
        )}
      </Component>
    </FocusRing>
  );
}

const _Button = forwardRef(Button);
export { _Button as Button };

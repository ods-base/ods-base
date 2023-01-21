import { FocusRing as RAFocusRing, FocusRingProps } from "react-aria";
import styles from "./FocusRing.module.css";
import { OCPropsWithChildrenAnd } from "../types";

export function FocusRing({
  children,
  focusRingClass,
  focusClass,
  ...props
}: OCPropsWithChildrenAnd<FocusRingProps>) {
  return (
    <RAFocusRing
      focusClass={focusClass || styles.focus}
      focusRingClass={focusRingClass || styles.focusRing}
      {...props}
    >
      {children}
    </RAFocusRing>
  );
}

import { cva, VariantProps } from "class-variance-authority";
import styles from "./TextField.module.css";
import { useTextField, AriaTextFieldProps } from "react-aria";
import { forwardRef, useRef } from "react";

const textFieldVariants = cva(styles.textField, {
  variants: {
    size: {
      s: styles.small,
      m: styles.medium,
      l: styles.large,
    },
  },
});

export interface TextFieldProps
  extends AriaTextFieldProps,
    VariantProps<typeof textFieldVariants> {}

/**
 * This is gonna change
 * @param size
 * @param props
 * @constructor
 * @experimental
 */
function TextField({ size, ...props }: TextFieldProps) {
  const { label } = props;
  const ref = useRef();
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  // we're adding this to the wrong place... we need better styling of all of this
  const classes = textFieldVariants({
    size,
  });

  return (
    <div className={styles.textField}>
      <label {...labelProps}>{label}</label>
      <input className={classes} {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

const _TextField = forwardRef(TextField);
export { _TextField as TextField };

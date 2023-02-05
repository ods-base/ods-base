import { cx, cva, VariantProps } from "class-variance-authority";
import styles from "./TextField.module.css";
import { useTextField, AriaTextFieldProps } from "react-aria";
import { forwardRef, RefObject, useRef } from "react";
import { FocusRing } from "../../FocusRing/FocusRing";
import { OCComponentPropsAnd } from "../../types";
import { Text } from "../../Typography/Text/Text";

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
  extends Omit<AriaTextFieldProps, "onChange">,
    VariantProps<typeof textFieldVariants> {
  onChange?: AriaTextFieldProps["onInput"];
  onValueChange?: AriaTextFieldProps["onChange"];
}

/**
 * This is gonna change
 * @experimental
 */
function TextField(
  { size, className, style, ...props }: OCComponentPropsAnd<TextFieldProps>,
  ref: RefObject<HTMLInputElement>
) {
  const defaultRef = useRef(null);
  const defaultedRef = ref || defaultRef;

  // turn react aria props back into what is expected
  const reactAriaProps = {
    ...props,
    onChange: props.onValueChange,
    onInput: props.onChange,
  };

  const { label } = props;
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(reactAriaProps, defaultedRef);

  // we're adding this to the wrong place... we need better styling of all of this
  const classes = cx(
    textFieldVariants({ size }),
    props.errorMessage ? styles.error : null
  );

  return (
    <div style={style} className={[styles.textfield, className].join(" ")}>
      <div className={styles.labelErrorWrapper}>
        <label {...labelProps}>{label}</label>
        {props.errorMessage && (
          <Text
            size="xs"
            weight="heavy"
            {...errorMessageProps}
            className={styles.errorMessage}
          >
            {props.errorMessage}
          </Text>
        )}
      </div>
      <FocusRing isTextInput>
        <input className={classes} {...inputProps} ref={ref} />
      </FocusRing>
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
    </div>
  );
}

const _TextField: typeof TextField & { ref?: RefObject<HTMLInputElement> } =
  forwardRef(TextField) as typeof TextField & {
    ref?: RefObject<HTMLInputElement>;
  };
export { _TextField as TextField };

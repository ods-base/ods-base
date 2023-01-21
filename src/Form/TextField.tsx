import { CSSProperties, HTMLAttributes } from "react";
import styles from "./TextField.module.css";
import cx from "classnames";

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  description?: string;
  descriptionProps?: HTMLAttributes<HTMLDivElement>;
  errorMessage?: string;
  errorMessageProps?: HTMLAttributes<HTMLDivElement>;
}

export function TextField({
  name,
  register,
  style,
  className,
  label,
  labelProps,
  description,
  descriptionProps,
  errorMessage,
  errorMessageProps,
  ...inputProps
}: TextFieldProps) {
  return (
    <div className={cx(styles.textField, className)} style={style}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} {...register(name)} />
      {description && <div {...descriptionProps}>{description}</div>}
      {errorMessage && <div {...errorMessageProps}>{errorMessage}</div>}
    </div>
  );
}

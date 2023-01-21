"use client";

import { useSearchFieldState } from "react-stately";
import { AriaSearchFieldProps, useSearchField } from "react-aria";
import { useRef } from "react";

export function SearchField(props: AriaSearchFieldProps) {
  const { label } = props;
  let state = useSearchFieldState(props);
  let ref = useRef<HTMLInputElement>(null);
  let { labelProps, inputProps } = useSearchField(props, state, ref);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <label
        {...labelProps}
        style={{
          fontSize: "0.8rem",
          marginBottom: "2px",
          paddingLeft: "4px",
        }}
      >
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        style={{
          padding: "4px",
          borderRadius: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      />
    </div>
  );
}

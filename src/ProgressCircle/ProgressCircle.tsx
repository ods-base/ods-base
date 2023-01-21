import { AriaProgressBarProps, useProgressBar } from "react-aria";
import { OCComponentPropsAnd } from "../types";
import { forwardRef, RefObject } from "react";

export type ProgressCircleProps = AriaProgressBarProps & {
  size?: number;
  thickness?: number;
};

function ProgressCircle(
  {
    style,
    className,
    size = 32,
    thickness = 2,
    label = "In Progress",
    ...props
  }: OCComponentPropsAnd<ProgressCircleProps>,
  ref: RefObject<SVGSVGElement>
) {
  let { isIndeterminate, value, minValue = 0, maxValue = 100 } = props;
  let { progressBarProps } = useProgressBar({ label, ...props });
  let radius = size / 2;
  let center = radius;
  let r = radius - thickness;
  let c = 2 * r * Math.PI;
  let percentage = isIndeterminate
    ? 0.25
    : (value - minValue) / (maxValue - minValue);
  let offset = c - percentage * c;

  return (
    <svg
      {...progressBarProps}
      style={{ shapeRendering: "geometricPrecision", ...style }}
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      strokeWidth={thickness}
      ref={ref}
    >
      <circle
        role="presentation"
        cx={center}
        cy={center}
        r={r}
        stroke="currentColor"
        opacity={0.4}
      />
      <circle
        role="presentation"
        cx={center}
        cy={center}
        r={r}
        stroke="currentColor"
        strokeDasharray={`${c} ${c}`}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${radius} ${radius})`}
      >
        {props.isIndeterminate && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="0s"
            dur="1s"
            from={`0 ${radius} ${radius}`}
            to={`360 ${radius} ${radius}`}
            repeatCount="indefinite"
          />
        )}
      </circle>
    </svg>
  );
}

const _ProgressCircle = forwardRef(ProgressCircle);
export { _ProgressCircle as ProgressCircle };

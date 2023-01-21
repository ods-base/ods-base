import * as react from 'react';
import { CSSProperties, ComponentPropsWithoutRef, ReactNode, ForwardedRef, ReactElement, HTMLAttributes } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { AriaButtonProps, AriaSearchFieldProps, AriaProgressBarProps } from 'react-aria';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: {
    intent?: "black" | "white" | "accent" | "primary" | "secondary" | "destroy" | "whiteTransparent" | "blackTransparent";
    size?: "s" | "m" | "l";
    displayType?: "fill" | "outline";
} & class_variance_authority_dist_types.ClassProp) => string;
interface CustomButtonProps {
    pending?: boolean;
    asChild?: boolean;
}
interface ButtonProps extends CustomButtonProps, AriaButtonProps, VariantProps<typeof buttonVariants> {
}
declare const _Button: react.ForwardRefExoticComponent<ButtonProps & {
    style?: react.CSSProperties;
    className?: string;
} & react.RefAttributes<HTMLButtonElement>>;

declare const headingVariants: (props?: {
    fontStyle?: "serif" | "sansSerif";
    weight?: "light" | "default" | "heavy";
    size?: "s" | "m" | "l" | "xxs" | "xs" | "xl" | "xxl" | "xxxl";
    color?: "normal" | "accent" | "bright" | "subtle";
} & class_variance_authority_dist_types.ClassProp) => string;
interface CustomHeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
interface HeadingProps extends VariantProps<typeof headingVariants>, CustomHeadingProps {
}
declare const _Heading: react.ForwardRefExoticComponent<HeadingProps & {
    style?: react.CSSProperties;
    className?: string;
} & {
    children: react.ReactNode;
} & react.RefAttributes<HTMLHeadingElement>>;

type OCComponentPropsAnd<T> = T & {
    style?: CSSProperties;
    className?: string;
};

declare const textVariants: (props?: {
    fontStyle?: "serif" | "sansSerif";
    weight?: "default" | "heavy";
    size?: "s" | "m" | "l" | "xxs" | "xs" | "xl" | "xxl" | "xxxl";
    color?: "normal" | "accent" | "bright" | "subtle";
} & class_variance_authority_dist_types.ClassProp) => string;
type ValidElement = "a" | "div" | "span" | "p" | "li" | "ul";
type TextProps<As extends ValidElement> = ComponentPropsWithoutRef<As> & VariantProps<typeof textVariants> & {
    as?: As;
    asChild?: boolean;
    children?: ReactNode;
};
declare function Text<As extends ValidElement = "span">({ as, asChild, children, style, className, fontStyle, weight, size, color, ...componentProps }: OCComponentPropsAnd<TextProps<As>>, ref: ForwardedRef<As>): JSX.Element;
declare const _Text: typeof Text;

declare function SearchField(props: AriaSearchFieldProps): JSX.Element;

declare function Popover({ trigger, children, }: {
    trigger: ReactElement;
    children: ReactNode;
}): JSX.Element;

type ProgressCircleProps = AriaProgressBarProps & {
    size?: number;
    thickness?: number;
};
declare const _ProgressCircle: react.ForwardRefExoticComponent<AriaProgressBarProps & {
    size?: number;
    thickness?: number;
} & {
    style?: react.CSSProperties;
    className?: string;
} & react.RefAttributes<SVGSVGElement>>;

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
declare function TextField({ name, register, style, className, label, labelProps, description, descriptionProps, errorMessage, errorMessageProps, ...inputProps }: TextFieldProps): JSX.Element;

export { _Button as Button, ButtonProps, _Heading as Heading, HeadingProps, Popover, _ProgressCircle as ProgressCircle, ProgressCircleProps, SearchField, _Text as Text, TextField, TextProps };

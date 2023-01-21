import { CSSProperties, ReactNode } from "react";

export type OCComponentPropsAnd<T> = T & {
  style?: CSSProperties;
  className?: string;
};

export type OCParentComponentPropsAnd<T> = OCComponentPropsAnd<T> & {
  children: ReactNode;
};

export type OCPropsWithChildrenAnd<T> = T & {
  children: ReactNode;
};

import { ReactNode } from "react";

export function TextWrapper({
  className = "",
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <p className={`text-3xl my-6 ${className}`} {...rest}>
      {children}
    </p>
  );
}

export function BodyTextWrapper({
  className = "",
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <p className={`text-2xl my-3 ${className}`} {...rest}>
      {children}
    </p>
  );
}

import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href? : string;
};

const isAnchorProps = (props: ButtonProps | AnchorProps): props is AnchorProps=> {
  return 'href' in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }

  return <button {...props} className="button"></button>;
};

export default Button;

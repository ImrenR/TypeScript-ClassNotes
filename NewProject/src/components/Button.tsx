import type { ComponentPropsWithoutRef } from "react";

type ButtonProps ={
  el : 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;



const Button = (props: ButtonProps | AnchorProps) => {
  
  const {el, ...otherProps} = props;
  
  
  if(props.el === 'anchor') {
  return <a {...otherProps}></a>
  }
  



  return <button></button>
}

export default Button
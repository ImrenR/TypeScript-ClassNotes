import type { ComponentPropsWithoutRef } from "react";

type ButtonProps ={
  el : 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;



const Button = (props: ButtonProps | AnchorProps) => {
  

  
  
  if(props.el === 'anchor') {
  return <a {...props} className="button"></a>
  }
  



  return <button {...props} className="button"></button>
}

export default Button
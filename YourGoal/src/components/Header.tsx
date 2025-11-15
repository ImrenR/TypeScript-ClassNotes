import type { FC, PropsWithChildren } from "react"


type HeaderProps = PropsWithChildren<{image:{src: string, alt: string}}>


const Header : FC<HeaderProps> = ({children, image}) => {
  return (
  <header >
    <img {...image} className="w-16 h-16 rounded-full"/>
    {children}
  </header>
  )
}

export default Header
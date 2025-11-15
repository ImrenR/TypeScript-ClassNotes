import type { FC, PropsWithChildren } from "react"


type headerProps = PropsWithChildren<{image: string}>


const Header : FC<headerProps> = ({image}) => {
  return (
    <div>{image}</div>
  )
}

export default Header
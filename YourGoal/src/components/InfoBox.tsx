import type { ReactNode } from "react"


type InfoBoxProps = {
  mode: "hint" | "warning",
  children : ReactNode
}

const InfoBox = ({mode, children}: InfoBoxProps) => { //info, warning
  if ( mode === 'hint') {
   return (
    <div>
      <h2>Warning</h2>
      <p>{children}</p>
    </div>
  ) 
  }
  
  
  return (
    <div>
      <h2>Warning</h2>
      <p>{children}</p>
    </div>
  )
}

export default InfoBox
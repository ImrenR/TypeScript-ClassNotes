import type { ReactNode } from "react"


type InfoBoxProps = {
  mode: "hint" | "warning",
  children : ReactNode
};



const InfoBox = ({mode, children}: InfoBoxProps) => { //info, warning
  if ( mode === 'hint') {
   return (
    <aside className="infobox infobox-hint">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  ) ;
  }
  
  
  return (
    <aside className="inforbox infobox-warning">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
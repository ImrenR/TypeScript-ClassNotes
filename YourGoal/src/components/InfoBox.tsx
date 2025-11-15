import type { ReactNode } from "react"

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
}


type WarningBoxProps = {
  mode:  "warning";
  severity: "low" | "medium" | "high" ;
  children : ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = ({mode, children, severity}: InfoBoxProps) => { //info, warning
  if ( mode === 'hint') {
   return (
    <aside className="infobox infobox-hint">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  ) ;
  }
  
  
  return (
    <aside className={`inforbox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
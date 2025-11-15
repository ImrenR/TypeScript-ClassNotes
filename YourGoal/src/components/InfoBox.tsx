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

const InfoBox = (props: InfoBoxProps) => { //info, warning
  const {children, mode}=props;

  if ( mode === 'hint') {
   return (
    <aside className="infobox infobox-hint">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  ) ;
  }
  
  const {severity}=props;



  return (
    <aside className={`inforbox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox
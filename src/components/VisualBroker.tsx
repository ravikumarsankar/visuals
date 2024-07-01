
import * as React from "react";
import ThemeComponent from "./ThemeComponent";
import Scaling from './Scaling';
import Table from './Table';
import '../styles/visual.less';
import { THEME } from "../Constants/UIConstants";


 
const VisualBroker = (props) => {
  const dataViews = props.dataViews[0];
   const backgroundColor = dataViews?.metadata?.objects?.general?.theme===THEME.DARK?'#585858':'#ffffff'
  const backgroundStyle = {
    background:backgroundColor
  } 
  return <div className="matrix-header" style={backgroundStyle} >
        <div className="matrix-component">
         <ThemeComponent dataViews={dataViews} />
         <Scaling dataViews={dataViews} />
       </div>
       <div> <Table dataViews={dataViews} /></div>
      
          </div>
}
export default VisualBroker;
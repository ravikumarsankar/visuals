import * as React from "react";
import { PROPERTY_TYPE, THEME, UPDATE_KIND } from "../Constants/UIConstants";
import VisualService from "../services/VisualService";

const themeOptions = [
    {
    displayName: 'Light',
    value:THEME.LIGHT
    },
    {
     displayName: 'Dark',
     value:THEME.DARK
    }
]

const ThemeComponent = (props) => {
    const selectedTheme = props.dataViews.metadata?.objects?.general?.theme
    const currentValue = selectedTheme ?? themeOptions[0]?.value;
    const onThemeChange = (value:string) => {
        VisualService.setVisualPersistedProperties({
            propertyType: PROPERTY_TYPE.THEME,
            updateKind: UPDATE_KIND.Settings,
            value
        })
    }
    const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'15px'
}
   
    return <div style={style} >
          <div className="visual-label">Theme</div>
         <select
              title="table"
              style={{ height: '35px', width: '100px' }}
              value={currentValue}
              onChange = {(event)=>onThemeChange(event.target.value)}
            >
              {themeOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.displayName}
                  </option>
                );
              })}
            </select>
    </div>
}
export default ThemeComponent;
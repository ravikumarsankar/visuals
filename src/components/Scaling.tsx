import * as React from 'react';
import { PROPERTY_TYPE, UPDATE_KIND } from '../Constants/UIConstants';
import VisualService from '../services/VisualService';

const scalingOptions = [
    {
       displayName: 'None',
        value:'none'
    },
    {
        displayName: 'Thousands',
        value:'1e3'
    },
    {
        displayName: 'Lakhs',
        value:'1e5'

    },

    {
        displayName: 'Millions',
        value: '1e6',
    },
    {
        displayName: 'Billions',
        value: '1e9',

    }
]
const Scaling = (props) => {
    const selectedScaling = props.dataViews?.metadata?.objects.general.scaling;
    const currentValue = selectedScaling ?? scalingOptions[0]?.value;
    const onScalingChange = (value:string) => {
        VisualService.setVisualPersistedProperties({
            updateKind: UPDATE_KIND.Settings,
            propertyType: PROPERTY_TYPE.SCALING,
            value
        })
    }
    return <div style={{display:'flex'}}>
            <div className='visual-label'>Scaling</div>
            <select
              title="table"
              style={{ height: '36px', width: '100px' }}
              value={currentValue}
              onChange = {(event)=>onScalingChange(event.target.value)}
            >
              {scalingOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.displayName}
                  </option>
                );
              })}
            </select>
           </div>
}
export default Scaling;
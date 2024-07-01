import updateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost

class VisualService{
    static visualOptions: updateOptions;
    static visualHost: IVisualHost;
    static dataView: powerbi.DataView;
    static setVisualPersistedProperties(props) {
        const { propertyType, updateKind, value } = props;
        this.visualHost.persistProperties({
           merge: [
                {
                    objectName: updateKind,
                    selector: null,
                    properties: {
                        [propertyType]:value
                    }
               }
           ]
        })
       
    }
    
}
export default VisualService;
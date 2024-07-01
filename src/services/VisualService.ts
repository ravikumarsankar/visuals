import { Visual } from "../visual";
import updateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost

class VisualService{
    static visualOptions: updateOptions;
    static visualHost: IVisualHost;
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
    static updateSelection(row) {
    const selectionId = this.visualHost
      .createSelectionIdBuilder()
      .withMatrixNode(row, this.visualOptions.dataViews[0].matrix.rows.levels)
      .createSelectionId();
        Visual.selectionManager.select(selectionId);
  }
    
}
export default VisualService;
import updateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
declare class VisualService {
    static visualOptions: updateOptions;
    static visualHost: IVisualHost;
    static setVisualPersistedProperties(props: any): void;
    static updateSelection(row: any): void;
}
export default VisualService;

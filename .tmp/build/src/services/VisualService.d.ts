import updateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
declare class VisualService {
    static visualOptions: updateOptions;
    static visualHost: IVisualHost;
    static dataView: powerbi.DataView;
    static setVisualPersistedProperties(props: any): void;
}
export default VisualService;

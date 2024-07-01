import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import ISelection = powerbi.extensibility.ISelectionManager;
export declare class Visual implements IVisual {
    private target;
    static selectionManager: ISelection;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
}

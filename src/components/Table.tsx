import * as React from 'react';
import VisualService from '../services/VisualService';
import '../styles/table.less'


const getValueForNode = (rowNode, colNode,rowIndex): number | null => {
    // Navigate through values if they exist
    let value: number | null = null;

    // Find the value based on the row and column keys
    if (rowNode.values) {
      value = rowNode.values[rowIndex].value as number | null;
    }

    // If no direct value, check for children
    if (!value && rowNode.children && colNode.children) {
      // Traverse deeper into row and column children
      for (let rChild of rowNode.children) {
        for (let cChild of colNode.children) {
          value = getValueForNode(rChild, cChild,rowIndex);
          if (value !== null) break;
        }
        if (value !== null) break;
      }
    }

    return value;
  }
  const constructValues = (rowsRoot, columnsRoot) => {
      const rows = rowsRoot.children;
      const cols = columnsRoot.children;


   const values = Array.from({ length: rows.length }, () => Array(cols.length).fill(null));

    // Populate values array
    rows.forEach((rowNode, rowIndex) => {
      cols.forEach((colNode, colIndex) => {
        const value = rowNode.values[colIndex].value;
        values[rowIndex][colIndex] = value;
      });
    });

    return values;
  }


const Table = (props) => {
    const { matrix } = props.dataViews;
    const scaleValue = props.dataViews?.metadata?.objects?.general?.scaling;
    const rows = matrix.rows.root.children.map(row => row.value) as string[];
    const cols = matrix.columns.root.children.map(col => col.value) as string[];
    const values = constructValues(matrix.rows.root,matrix.columns.root);
    const scales = {
            '1e3':'K',
            '1e5': 'L',
            '1e6': 'M',
            '1e9': 'B'
          };
    const scaleFactor = +scaleValue || 1;
    const scaledString = scaleFactor !== 1 ? ` ${scales[scaleValue]}` : '';
    const scaledValues =  values.map(row =>
            row.map(value =>
               value !== null ? (value / scaleFactor).toFixed(2) + scaledString : null
        )
    );
    const onClick = (rowId:string) => {
       const row = matrix.rows.root.children.find(row =>row.value===rowId )
       VisualService.updateSelection(row)
    }
 
return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {cols?.map((header, colIndex) => (
              <th key={colIndex}>{header}</th>
            ))}
          </tr>
        </thead>
            <tbody>
                
          {rows?.map((header, rowIndex) => (
            <tr key={rowIndex}>
              <td><div onClick={()=>onClick(header)}>{header}</div></td>
               {scaledValues[rowIndex]?.map((value, colIndex) => (
                <td key={colIndex}>{value !== null ? value.toString() : '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
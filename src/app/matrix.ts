import { Cell } from './cell';

export class Matrix {

    rowsNum: number;
    colsNum: number;
    matrix: Cell[][] = []; //yeah it is the right way

    constructor(rowsNum: number, colsNum: number) {
        this.rowsNum = rowsNum;
        this.colsNum = colsNum;
        for (let r = 0; r < this.rowsNum; r++) {
            let row: Cell[] = [];
            for (let c = 0; c < this.colsNum; c++) {
                let cell: Cell = new Cell(r, c, "dead");
                row.push(cell);
            }
            this.matrix.push(row);
        }
        //console.log(this.matrix);
    }

    deepCopy() : Matrix
    {
        let copy:Matrix = new Matrix(this.rowsNum, this.colsNum);
        for (let r = 0; r < this.rowsNum; r++) {
            let row: Cell[] = [];
            for (let c = 0; c < this.colsNum; c++) {
                  row.push( this.matrix[r][c] );
            }
            copy.matrix.push(row);
        }
        return copy;
    }


    getNeighbors(r: number, c: number): Cell[] {

        let result: Cell[] = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let nr = r + i;
                let nc = c + j;
                if ( (i != 0 || j != 0) && nr > 0 && nc > 0 && nr < this.rowsNum && nc < this.colsNum) {
                    result.push(this.matrix[nr][nc]);
                }
            }
        }
        return result;
    }

}

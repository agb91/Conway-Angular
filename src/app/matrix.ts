import { Cell } from './cell';

export class Matrix {

	rowsNum:number;
	colsNum:number;
	matrix:Cell[][] = []; //yeah it is the right way

	constructor(rowsNum: number, colsNum: number) {
		this.rowsNum = rowsNum;
		this.colsNum = colsNum;
		this.matrix = [];
        for (var r = 0; r < this.rowsNum; r++) {
        	let row:Cell[] = [];
        	for (var c = 0; c < this.colsNum; c++) {
        		let cell:Cell = new Cell();
        		row.push(cell);
        	}
        	this.matrix.push(row);
		}
		console.log( this.matrix );
    }

    setState( r:number, c:number, state:string )
    {
    	
    	this.matrix[r][c].setState(state);
    	//console.log( this.matrix[r][c] );
    }

}

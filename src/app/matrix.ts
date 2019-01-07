import { Cell } from './cell';
import { Row } from './row';

export class Matrix {

	rowsNum:number;
	colsNum:number;
	rows:Row[] = [];

	getCell( r:number, c:number):Cell
	{
		if (r < this.rowsNum && c < this.colsNum)
		{
			return this.rows[r].getCell(c); 
		}
		else
		{
			return new Cell();
		}
	}

	setCell( r:number, c:number, cell:Cell )
	{
		if( r < this.rowsNum )
		{
			this.rowsNum[r].setCell(c, cell);
		}
	}

	constructor(rowsNum: number, colsNum: number) {
        this.rowsNum = rowsNum;
        for (var _i = 0; _i < this.rowsNum; _i++) {
		    let row = new Row( colsNum );
		    this.rows.push( row );
		}
    }
}

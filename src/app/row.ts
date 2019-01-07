import { Cell } from './cell';

export class Row {

	len:number
	cols:Cell[] = []

	getCell( index:number ):Cell
	{
		if (index < this.len)
		{
			return this.cols[index]; 
		}
		else
		{
			return new Cell();
		}
	}

	setCell( index:number, cell:Cell )
	{
		if( index < this.len )
		{
			this.cols[index] = cell;
		}
	}

	constructor( len: number) {
        this.len = len;
        for (var _i = 0; _i < this.len; _i++) {
		    let cell = new Cell( "dead");
		    this.cols.push( cell );
		}
    }
}

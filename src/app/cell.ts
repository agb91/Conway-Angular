export class Cell {

	state: string;
	r: number;
	c: number;

	constructor(r: number, c: number, state: string) {
		this.state = state;
		this.r = r;
		this.c = c;
	}

}

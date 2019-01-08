import { Injectable } from '@angular/core';
import { Matrix } from './matrix';
import { Cell } from './cell';

@Injectable({
	providedIn: 'root'
})
export class GridService {

	constructor() { }

	initialize(matrix: Matrix): Matrix {
		matrix.matrix[10][10].state = "alive";
		console.log("begin", matrix);
		matrix.matrix[10][11].state = "alive";
		matrix.matrix[10][12].state = "alive";
		matrix.matrix[9][12].state = "alive";
		matrix.matrix[8][11].state = "alive";

		console.log("second", matrix);

		return matrix;
	}

	update(matrix: Matrix): Matrix {
		let newMatrix = this.applyRules(matrix);
		//let neighbors: Cell[] = matrix.getNeighbors(randomR, randomC);
		//neighbors.forEach( n => matrix.setState(n.r, n.c, "alive") );
		return newMatrix;
	}


	applyRules(oldMatrix) {
		let newMatrix = oldMatrix.deepCopy();
		for (let r = 0; r < oldMatrix.rowsNum; r++) {
			for (let c = 0; c < oldMatrix.colsNum; c++) {
				let oldState: string = oldMatrix.matrix[r][c].state;
				let neighbors: Cell[] = oldMatrix.getNeighbors(r, c);
				let alive: number = this.countAlive(neighbors);
				let state: string = this.nextState(alive, oldState);
				if (r == 11 && c == 11)
					console.log(oldState, neighbors, alive, state);
				newMatrix.matrix[r][c].state = state;
			}
		}
		return newMatrix;
	}

	countAlive(neighbors: Cell[]): number {
		//console.log( "alives: " + neighbors.filter(n => n.state === "alive").length );

		return neighbors.filter(n => n.state === "alive").length;
	}

	nextState(n: number, oldState: string): string {

		if (oldState === "alive" && (n === 2 || n === 3))//continue to live
		{
			return "alive";
		}
		if (oldState === "dead" && (n === 3))//born
		{
			return "alive";
		}

		return "dead";
	}
}

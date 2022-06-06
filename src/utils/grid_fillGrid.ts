import {GRID, NUMBERS} from '../typings'
import { Shuffle } from '.';
import isInRow from './grid_fillGrid_Test';

// const grid = [
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0]
// ]

const initialNumbers: NUMBERS[] = [1,2,3,4,5,6,7,8,9]

function fillgrid(grid: GRID) {

    let row = 0;
    let col = 0;

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9);
        col = i % 9

        if (grid[row][col] === 0) {
            Shuffle(initialNumbers)

            for(let value of initialNumbers) {

                if (!isInRow({ grid, row, value})){
                    let isNotInCol = true
                    for (let i=0; i<9; i++){
                        if (value === grid[i][col]) return true
                    }
                    if (isNotInCol){

                    }
                }

                grid[row][col] = value
            }
            break
        }
    }
    

}

export default fillgrid;
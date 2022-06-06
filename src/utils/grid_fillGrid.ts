import {GRID, NUMBERS} from '../typings'
import { Shuffle } from '.';

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
            break
        }
    }
    

}

export default fillgrid;
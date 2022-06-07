import {GRID, NUMBERS} from '../typings'
import { Shuffle, isInCol, isInRow, identifySquare, squareCheck, gridCheck } from '.';

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

                if (!isInRow({ grid, row, value, col })){
                    if (!isInCol({grid, row, value, col})){
                        const square = identifySquare ({col, grid, row})
                        if(!squareCheck({ square, value})){
                            grid[row][col] = value
                            if (gridCheck(grid)) return true
                            else if (fillgrid(grid)) return true
                        }
                    }
                }
                grid[row][col] = value
            }
            break
        }
    }
}

export default fillgrid;
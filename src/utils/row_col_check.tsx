import { forEachTrailingCommentRange } from 'typescript'
import {GRID, N, NUMBERS} from '../typings'

interface IInput {
    grid: GRID
    col: number
    value: NUMBERS
    row: number

}
//returns true if value is used in current row
export function isInRow({ grid, row, value}: IInput): boolean {
    return grid[row].includes(value); 
}

export function isInCol({ grid, col, value}: IInput): boolean{
    for (let i = 0; i < 9; i++){
        if (value === grid[i][col]) return true;
    }
    return false
}


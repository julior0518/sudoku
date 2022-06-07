import { GRID } from "../typings";

function gridCheck(grid:GRID): boolean {
    for( let i = 0; i < 9 ; i++ ){
        for( let j = 0; j < 9 ; j++ ){
            if ( grid[i][j] === 0) return false
        }
    }
    return true
}

export default gridCheck
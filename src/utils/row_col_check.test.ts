import { isInCol, isInRow } from ".";
import { GRID } from '../typings'



describe('isInCol', ()=>{
    it('value is in Column',()=>{
        const grid: GRID = [
            [8,4,2,6,5,1,3,9,7],
            [5,3,7,2,8,9,6,4,1],
            [6,9,1,7,3,4,5,2,8],
            [1,6,3,8,4,5,9,7,2],
            [7,5,8,1,9,2,4,6,3],
            [9,2,4,3,7,6,1,8,5],
            [4,7,6,5,1,8,2,3,9],
            [2,8,5,9,6,3,7,1,4],
            [3,1,9,3,1,7,8,5,6]
        ]

        expect(isInCol({col: 0, grid, value:9, row: 0})).toBeTruthy()
        expect(isInCol({col: 5, grid, value:9, row: 0})).toBeTruthy()

    })
    it('Value is NOT in Column',()=>{
        const grid: GRID = [
            [8,4,2,6,5,1,3,0,7],
            [5,3,7,2,8,0,0,4,1],
            [6,0,1,7,3,4,5,2,8],
            [1,6,3,8,4,5,9,7,2],
            [7,5,8,1,0,2,4,6,3],
            [0,2,4,3,7,6,1,8,5],
            [4,7,6,5,1,8,2,3,0],
            [2,8,5,0,6,3,7,1,4],
            [3,1,9,3,1,7,8,5,6]
        ]

        expect(isInCol({col: 0, grid, value:9, row: 0})).toBeFalsy()
        expect(isInCol({col: 5, grid, value:9, row: 0})).toBeFalsy()

    })
})

describe('isInRow', ()=>{
    it('value is in Row',()=>{
        const grid: GRID = [
            [8,4,2,6,5,1,3,9,7],
            [5,3,7,2,8,9,6,4,1],
            [6,9,1,7,3,4,5,2,8],
            [1,6,3,8,4,5,9,7,2],
            [7,5,8,1,9,2,4,6,3],
            [9,2,4,3,7,6,1,8,5],
            [4,7,6,5,1,8,2,3,9],
            [2,8,5,9,6,3,7,1,4],
            [3,1,9,3,1,7,8,5,6]
        ]

        expect(isInRow({col: 0, grid, value:9, row: 0})).toBeTruthy()
        expect(isInRow({col: 0, grid, value:9, row: 4})).toBeTruthy()

    })
    it('Value is NOT in Row',()=>{
        const grid: GRID = [
            [8,4,2,6,5,1,3,0,7],
            [5,3,7,2,8,0,0,4,1],
            [6,0,1,7,3,4,5,2,8],
            [1,6,3,8,4,5,9,7,2],
            [7,5,8,1,0,2,4,6,3],
            [0,2,4,3,7,6,1,8,5],
            [4,7,6,5,1,8,2,3,0],
            [2,8,5,0,6,3,7,1,4],
            [3,1,9,3,1,7,8,5,6]
        ]

        expect(isInRow({col: 0, grid, value:9, row: 0})).toBeFalsy()
        expect(isInRow({col: 0, grid, value:9, row: 5})).toBeFalsy()

    })
})
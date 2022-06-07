import { SQUARE } from "../typings";

import squareCheck from "./squareCheck";

describe('', () => {
    it( "when value is in grid square", ()=>{
        const square: SQUARE = [
            [1,3,4],
            [8,2,7],
            [6,9,5]
        ]

        expect(squareCheck({ square, value: 1})).toBeTruthy()
    })

    it( "when value is NOT in grid square", ()=>{
        const square: SQUARE = [
            [0,3,4],
            [8,2,7],
            [6,0,5]
        ]

        expect(squareCheck({ square, value: 1})).toBeFalsy()
        expect(squareCheck({ square, value: 9})).toBeFalsy()
    })


})
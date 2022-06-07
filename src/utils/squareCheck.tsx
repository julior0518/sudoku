import { NUMBERS, SQUARE } from "../typings";

interface IInput {
    square: SQUARE
    value: NUMBERS
}
//// !!! square[2] deostn work, why?
function squareCheck({ square, value }: IInput): boolean {
    return [...square[0]].includes(value)
}

export default squareCheck;
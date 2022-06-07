import { NUMBERS, SQUARE } from "../typings";

interface IInput {
    square: SQUARE
    value: NUMBERS
}

function squareCheck({ square, value}: IInput): boolean {
    return [...square[0], ...square[1],...square[2]].includes(value)
}

export default squareCheck;
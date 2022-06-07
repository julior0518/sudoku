import { type } from "os";
import { Action, AnyAction } from "redux";
import { BLOCK_CORD } from "../typings";
import * as types from './types'

export const createGrid = (): Action => ({
    type:types.CREATE_GRID
})

export const selectBlock = (cord: BLOCK_CORD): AnyAction =>({
    type: types.SELECT_BLOCK,
    cord

})
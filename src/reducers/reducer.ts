import { AnyAction } from "redux";
import { createFulLGrid } from "../utils";
import { IReducer } from "./interfaces";

import * as types from './types'


const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer{

    switch(action.type) {
        case types.CREATE_GRID:
            return {...state, grid: createFulLGrid()}

        default:
            return state
    }
}

export default reducer
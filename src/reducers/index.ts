import reducer from "./reducer";

export * from './actions'
export type IReducer = ReturnType<typeof reducer>

export default reducer
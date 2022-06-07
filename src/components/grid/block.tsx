import { FC } from 'react'
import { Container }from './styleBlock'
import { N, INDEX} from '../../typings'
import { useSelector, useDispatch } from 'react-redux'
import { IReducer } from '../../reducers'
import { AnyAction, Dispatch } from 'redux'
import { selectBlock } from '../../reducers/actions';


interface IProps {
    colIndex: INDEX,
    rowIndex: INDEX,
}
interface IState {
    value: N
    isActive: boolean
}

const Block: FC<IProps> = ({colIndex, rowIndex}) => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const state = useSelector<IReducer, IState>(({ grid , selectedBlock}) => ({
        isActive: selectedBlock 
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
        value: grid ? grid[rowIndex][colIndex] : 0
    }))
    function handleClick() {
        dispatch(selectBlock([rowIndex, colIndex]))
    }

    return (
        <Container 
            active={state.isActive ? true : false} 
            onClick={handleClick}
        >
            {state.value === 0 ? ' ' : state.value}
        </Container>
    )
}
export default Block

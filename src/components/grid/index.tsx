import { Children, FC, useEffect, useCallback }from 'react'
import Block from './block';
import { Container, Row } from './styleGrid';
import { INDEX} from '../../typings'

import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createGrid } from '../../reducers/actions';

const Grid: FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(()=>
        dispatch(createGrid()), [dispatch]
    )
    useEffect(()=>{
        create()
    }, [create])
    return (
        <Container>
            {Children.toArray([...Array(9)].map((row, i) =>(
                <Row>
                    {Children.toArray([...Array(9)].map((col, z) =>(
                        <Block colIndex={z as INDEX} rowIndex={i as INDEX} />
                    )))}
                </Row>
                
            )))}
        </Container>
    )
}

export default  Grid;
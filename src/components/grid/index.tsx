import { Children, FC }from 'react'
import Block from './block';
import { Container, Row } from './styleGrid';

import { createFulLGrid } from '../../utils';

const Grid: FC = () => {
    const grid = createFulLGrid()
    console.log(grid)
    return (
        <Container>
            {Children.toArray([...grid[0]].map((row, i) =>(
                <Row>
                    {Children.toArray([...grid[0]].map((col, z) =>(
                        <Block colIndex={z} rowIndex={i} value={grid[i][z]} />
                    )))}
                </Row>
                
            )))}
        </Container>
    )
}

export default  Grid;
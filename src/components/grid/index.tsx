import { Children, FC }from 'react'
import Block from './block';
import { Container, Row } from './styleGrid';

const Grid: FC = () => {

    return (
        <Container>
            {Children.toArray([...Array(9)].map((row, i) =>(
                <Row>
                    {Children.toArray([...Array(9)].map((col, z) =>(
                        <Block colIndex={z} rowIndex={i}/>
                    )))}
                </Row>
                
            )))}
        </Container>
    )
}

export default  Grid;
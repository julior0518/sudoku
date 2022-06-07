import { FC } from 'react'

import { Container }from './styleBlock'
import { N } from '../../typings'

interface IProps {
    colIndex: number,
    rowIndex: number,
    value: N
}

const Block: FC<IProps> = ({colIndex, rowIndex, value}) => {

    return (

        <Container>
            {value}
        </Container>
    )
}

export default Block
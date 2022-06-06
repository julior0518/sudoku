import { FC } from 'react'

import { Container }from './styleBlock'

interface IProps {
    colIndex: number,
    rowIndex: number
}

const Block: FC<IProps> = ({colIndex, rowIndex}) => {

    return (

        <Container>
            |{colIndex} {rowIndex}|
        </Container>
    )
}

export default Block
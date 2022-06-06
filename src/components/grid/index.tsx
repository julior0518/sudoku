import { FC }from 'react'

const Grid: FC = () => {

    return (
        <div>
            {[...Array(9)].map((row, i) =>(
                <div key={i}>
                    {[...Array(9)].map((col, z) =>(
                        <div key={z}></div>
                    ))}
                </div>
                
            ))}
        </div>
    )
}

export default  Grid;
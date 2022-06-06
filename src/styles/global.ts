import { createGlobalStyle} from 'styled-components'
import { theme} from './theme'
import { ThemeType } from '../typings'

const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
        html {
            height: 100%;

            body {
                display:flex;
                flex-direction:column;
                height: 100%;
                margin: 0;
            
                #root {
                    background: ${theme.colors.background};
                    color: ${theme.colors.black};
                    display: flex;
                    font-family: sans-serif;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 15px
                }
            }
        }
`

export default GlobalStyle
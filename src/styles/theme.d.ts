import {} from 'styled-components'

import { ThemeType } from './theme'


declare module 'styled-componets' {
    export interface DefaultTheme extends ThemeType {}
}
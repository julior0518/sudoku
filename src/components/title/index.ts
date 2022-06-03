import styled from 'styled-components'
import { theme, ThemeType } from '../../styles/theme'


export const Title = styled.h1<{theme: ThemeType}>`
    color: ${theme.colors.white};
    margin-top: 10px;
    text-align: center;
`
export type ThemeType = typeof theme; 



export type N = 0 | 1| 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
export type NUMBERS = 0 | 1 | 2 | 3 | 4 | 5 | 6|  7 | 8 | 9 

export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW]
export type ROW = [N, N, N, N, N, N, N, N, N]

export type SQUARE_ROW = [N, N, N]
export type SQUARE = [ SQUARE_ROW, SQUARE_ROW, SQUARE_ROW ]

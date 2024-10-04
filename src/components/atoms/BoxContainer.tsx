import { Theme } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, SxProps } from "@mui/material"
import { ReactNode } from "react"

type BoxContainer = {
    children?: React.ReactNode
    sx?: SxProps<Theme>
    className?: string
}

export const BoxContainer = ({children,sx,className}: BoxContainer) => {
    return(
        <Box className={className + ' container'} sx={{width: '100%', float: 'left',marginBottom: '30px', ...sx}}>
            {children}
        </Box>
    )
}
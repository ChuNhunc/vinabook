import { Box, SxProps } from "@mui/material"
import { Theme } from "@mui/material"

type ContainerProps = {
    sx?: SxProps<Theme>
    children?: React.ReactNode
}

export const Container = ({sx, children}: ContainerProps) => {
    return (
        <>
            <Box sx={{...sx,maxWidth: '1100px', margin: 'auto'}}>{children}</Box>
        </>
    )
}
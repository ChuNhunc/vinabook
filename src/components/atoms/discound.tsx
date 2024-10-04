import { Box, SxProps } from "@mui/material"
import { Theme } from "@mui/material"

type BoxDiscound = {
    children?: React.ReactNode
    sx?: SxProps<Theme>
}

export const BoxDiscound = ({children, sx} : BoxDiscound) => {
    return(
        <Box sx={
            {
                position: "absolute",
                backgroundColor: "red",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                ...sx,
            }
        }>-{children}</Box>
    )
}
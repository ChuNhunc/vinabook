import { Image } from "@mui/icons-material"
import { SxProps } from "@mui/material"
import { Box, Theme } from "@mui/system"

type ImageProps = {
    src: string
    sx?: SxProps<Theme>
}

export const VinaBookImage = ({src, sx} : ImageProps) => {
    return (
        <Box component="img" src={"images/" + src} sx={{
            maxWidth: '100%',
            ...sx
        }}/>
    )
}

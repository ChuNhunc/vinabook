import { Box, SxProps, Theme } from "@mui/material"
import { VinaBookImage } from "../atoms/image"

type SmallBookBannerProps = {
    src: string,
    sx?: SxProps<Theme>
}
export const SmallBookBanner = ({src, sx}: SmallBookBannerProps) => {
    return (
        <Box 
            sx={{
                float: 'left',
                cursor: 'pointer',
                ...sx
            }}
        >
            <VinaBookImage src={src}></VinaBookImage>
        </Box>
    )
}
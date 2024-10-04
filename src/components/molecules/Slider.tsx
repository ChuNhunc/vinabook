import { Box } from "@mui/material"
import { VinaBookImage } from "../atoms/image"

type Slider = {
    src: string
}

export const Slider = ({src} : Slider) => {
    return (
        <Box className='slider'
            sx={{
                width: '100%',
                cursor: 'pointer'
            }}
        >
            <VinaBookImage src={src} sx={{width: '100%'}}></VinaBookImage>
        </Box>
    )
}
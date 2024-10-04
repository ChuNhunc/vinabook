import { Box } from "@mui/material"
import { VinaBookImage } from "../atoms/image"
import { Link } from "../atoms/typography"

type FixedSocialMedia = {
    src: string
}

export const FixedSocialMedia = ({src}: FixedSocialMedia) => {
    return (
        <>
            <Box 
                sx={(theme) => ({
                    marginTop: '5px', 
                    border: '1px solid #ccc', 
                    padding: '1px 4px 0px 4px', 
                    backgroundColor: 'white',
                    borderRight: 'none',
                    cursor: 'pointer',
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    }
                })}>
                <VinaBookImage src={src}/>
            </Box>
        </>
    )
}
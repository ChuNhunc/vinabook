import { Box, List, ListItem } from "@mui/material"
import { VinaBookImage } from "../atoms/image"

type ProductGallery = {
    mainThumb: string,
    subThumbs: string[]
}

export const ProductGallery = ({mainThumb, subThumbs}: ProductGallery) => {
    return (
        <>
            <Box className= 'main-image' sx={{width: '398px', height: '398px',}}>
                <VinaBookImage 
                    src={mainThumb}
                    sx={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain'
                    }}
                />
            </Box>
            <Box className= 'thumb-custom'
                sx={(theme)=> ({
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    }
                })}
            >
                <List 
                    sx={{
                        width: '100%', 
                        display: 'flex',
                    }}>
                    {subThumbs.map((thumb, index) => {
                        return (
                            <ListItem 
                                id={index.toString()}
                                sx={{
                                    width: '25%',
                                    margin: '0',
                                    padding: '0',
                                }}
                            >
                                <VinaBookImage src={thumb}/>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </>
    )
}
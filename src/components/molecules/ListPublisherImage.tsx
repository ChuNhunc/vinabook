import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"
import { VinaBookImage } from "../atoms/image"
import { Box } from "@mui/system"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { useContext } from "react"

export const ListPublisherImage = () => {
    const context = useContext(VinaBooksContext);
    return (
        <>
            <Box sx={{width: '100%',height: '200px', backgroundColor: 'white', overflow: 'hidden'}}>
                {context?.publisherStore.publishers.slice(0,4).map((publisher) => {
                    return (
                        <Box 
                            sx={(theme)=>({
                                width:'25%',
                                padding: '40px', 
                                float: 'left', 
                                opacity: 0.6, 
                                cursor: 'pointer',
                                ":hover": {
                                    opacity: 1,
                                },
                                [theme.breakpoints.down('md')]: {
                                    width: '50%',
                                    padding: '20px'
                                }
                            })}>
                            <VinaBookImage src={publisher.image}/>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}
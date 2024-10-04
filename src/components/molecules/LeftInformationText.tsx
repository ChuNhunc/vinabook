import { Box } from "@mui/material"
import { VinaBookImage } from "../atoms/image"
import { Text } from "../atoms/typography"

type LeftInformationProps = {
    photo: string
    text: string
}

export const LeftInformationText = ({photo, text}: LeftInformationProps) => {
    return (
        <>
            <Box sx={{display: 'flex', padding: '20px 0', gap:'15px'}}>
                <Box className ='picture' sx={{width: '32px'}}>
                    <VinaBookImage src={photo}/>
                </Box>
                <Box 
                    className= 'text' 
                    sx={{
                        width: 'calc(100% - 32px)',
                    }}>
                    <Text sx={{
                        fontSize: '15px',
                        lineHeight: '23px'
                    }}>{text}</Text>
                </Box>
            </Box>
        </>
    )
}
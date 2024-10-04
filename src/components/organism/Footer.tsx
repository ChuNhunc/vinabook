import { Box } from "@mui/material"
import { Container } from "../atoms/container"
import { FooterTop } from "../molecules/FooterTop"
import { ListFooter } from "../molecules/FooterList"
import { FooterBottom } from "../molecules/FooterBottom"

export const Footer = () => {
    return (
        <>
            <Box 
                className= 'footer'
                sx={{
                    overflow: 'hidden',
                    backgroundColor: '#EC8000',
                    boxSizing: 'border-box',
                    padding: '10px 0',
                    marginTop: '20px',
                }}
            >
                <Container>
                    <FooterTop></FooterTop>
                </Container>
            </Box>
            <Box 
                sx={{
                    backgroundColor: 'white'
                }}
            >
                <Container>
                    <ListFooter></ListFooter>
                </Container>
            </Box>
            <Box 
                sx={{
                    padding: '20px 0',
                    fontSize: '12px',
                    backgroundColor: '#ececec'
                }}
            >
                <Container>
                    <FooterBottom></FooterBottom>
                </Container>
            </Box>
        </>
    )
}
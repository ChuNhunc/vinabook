import { Box } from "@mui/material"
import { TextBold } from "../atoms/typography"
import { InputForm, SearchBar } from "./InputForm"

export const FooterTop = () => {
    return (
        <>
            <Box 
                className= 'footer-top'
                sx={{
                    width: '100%',
                    gap: '20px'
                }}
            >
                <Box className= 'footer-top-text' 
                    sx={(theme)=>({
                        color: 'white', 
                        width: '25%',
                        float: 'left',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                            paddingLeft: '20px'
                        }
                    })}>
                    <TextBold 
                        sx={(theme)=>({
                            fontSize: '18px',
                            [theme.breakpoints.down('md')]: {
                                width: '100%',
                            }
                        })}>
                            ĐĂNG KÝ NHẬN EMAIL</TextBold>
                    <TextBold sx={{fontSize: '15px'}}>Đăng ký nhận thông tin sách mới, sách bán</TextBold>
                </Box>
                <Box 
                    sx={(theme)=>({
                        position: 'relative', 
                        width: '70%', 
                        mt:'17px',
                        float:'right',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }
                    })}>
                    <InputForm/>
                </Box>
            </Box>
        </>
    )
}
import { Box } from "@mui/material"
import { VinaBookImage } from "../atoms/image"
import { Text, TextBold } from "../atoms/typography"

export const FooterBottom = () => {
    return (
        <>
            <Box 
                className='row' 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '0 -15px'
                }}
            >
                <Box sx={{maxWidth: '25%', flex: '0 0 25%', margin: '0 20px'}}>
                    <VinaBookImage src='footer_logobct.webp' sx={{width: '100%'}}/>
                </Box>
                <Box sx={{maxWidth: '65%', flex: '0 0 75%', margin: '0 20px'}}>
                    <Box>
                        <Text sx={{fontWeight: '400', mb: '10px'}}>CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM</Text>
                        <Text sx={{fontWeight: '300', fontSize: '13px'}}>Địa chỉ:52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh</Text>
                        <Text sx={{fontWeight: '300', fontSize: '13px'}}>MST:0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 10/03/2011</Text>
                        <Text sx={{fontWeight: '300', fontSize: '13px'}}>Tel:028.73008182- Fax:028.39733234- Email:hotro@vinabook.com</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
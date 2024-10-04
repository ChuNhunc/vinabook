import { Box } from "@mui/material"
import { Text, TextBold } from "../../atoms/typography"
import { VinaBookImage } from "../../atoms/image"
import { LeftInformationText } from "../../molecules/LeftInformationText"

export const LeftInformation = () => {
    return (
        <>
            <Box 
                className='title'
                sx={{
                    backgroundColor: '#ECEBE9',
                    padding: '15px 10px 15px 20px',
                }}
            >
                <TextBold>Chỉ có ở Vinabook</TextBold>
            </Box>
            <Box 
                className='list-text'
                sx={{
                    padding: '20px'
                }}
            >
                <LeftInformationText photo='pro_service_icon_1.webp' text='Giao hàng miễn phí'/>
                <LeftInformationText photo='pro_service_icon_2.webp' text='Tư vấn mua sách trong giờ hành chính'/>
                <LeftInformationText photo='pro_service_icon_3.webp' text='Miễn phí vận chuyển cho Đơn hàng từ 250.000đ'/>
                <LeftInformationText photo='pro_service_icon_5.webp' text='Hotline: 1900 6401'/>
            </Box>
        </>
    )
}
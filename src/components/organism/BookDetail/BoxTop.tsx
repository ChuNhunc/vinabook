import { Box, List } from "@mui/material"
import { BoxContainer } from "../../atoms/BoxContainer"
import { Text } from "../../atoms/typography"
import { Container } from "../../atoms/container"
import theme from "../../../theme"

type BoxTop = {
    catName: string,
    bookName: string
}

export const BoxTop = ({catName, bookName }: BoxTop) => {
    return (
        <>
            <Box 
                className='box-top'
                sx={{
                    backgroundColor: '#f5f5f5',
                    height: '40px',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            padding: '10px 0',
                            color: theme.palette.primary.text,
                            fontWeight: '200',
                            fontSize: '13px',
                            whiteSpace: 'nowrap',
                            
                        }}
                    >
                        <Text sx={{fontWeight: '100'}}>Trang chủ</Text>
                        <Text sx={{fontWeight: '100'}}>/</Text>
                        <Text sx={{fontWeight: '100'}}>{catName}</Text>
                        <Text sx={{fontWeight: '100'}}>/</Text>
                        <Text sx={{fontWeight: '100',wordWrap: 'break-word',whiteSpace: 'normal'}}>{bookName}</Text>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
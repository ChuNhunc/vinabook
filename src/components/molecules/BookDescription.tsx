import { Box } from "@mui/material"
import { Book } from "../../store/booksStore"
import { Text, TextBold } from "../atoms/typography"
import theme from '../../theme'
import { useTheme } from "@emotion/react"

type BookDescription = {
    book: Book
}

export const BookDescription = ({book}: BookDescription) => {
    return (
        <>
            <Box 
                className='title'
                sx={{
                    borderBottom: '1px solid #E0E0E0',
                }}
            >
                <TextBold sx={{fontSize: '19px',color: theme.palette.primary.text}}>GIỚI THIỆU SÁCH</TextBold>
            </Box>
            <Box
                className= 'content'
                sx={{
                    padding: '20px 0',
                }}
            >
                <Text sx={{fontSize: '15px'}}>Mô tả sản phẩm</Text>
                <Text sx={{fontSize: '16px'}}>{book.description}</Text>
                <Box sx={{marginTop: '10px'}}>
                    <Text sx={{fontSize: '16px'}}>Mã hàng: {book.id}</Text>
                    <Text sx={{fontSize: '16px'}}>Tên nhà cung cấp: {book.supplier}</Text>
                    <Text sx={{fontSize: '16px'}}>Tác giả: {book.author}</Text>
                    <Text sx={{fontSize: '16px'}}>NXB: {book.publisher}</Text>
                    <Text sx={{fontSize: '16px'}}>Năm XB: {book.publishYear}</Text>
                </Box>
            </Box>
        </>
    )
}
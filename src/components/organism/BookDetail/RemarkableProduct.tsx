import { Box, Typography } from "@mui/material"
import { TextBold } from "../../atoms/typography"
import { useContext } from "react"
import { VinaBooksContext } from "../../../context/VinaBooksContext"
import { LeftBookItem } from "../../molecules/LeftBookItem"

export const RemarkableProduct = () => {
    const context = useContext(VinaBooksContext);
    const listBook = context?.booksStore.books.slice(0,5) || [];
    return (
        <>
            <Box 
                className='title'
                sx={{
                    borderBottom: '2px solid #FF8D07',
                }}
            >
                <Typography sx={(theme)=>({
                    fontSize: '16px', 
                    fontWeight: '700',
                    color: '#4B4848',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '20px',
                    }
                })}>SẢN PHẨM NỔI BẬT</Typography>
            </Box>
            <Box className='list-item'>
                {listBook.map((book, index) => {
                    return(
                        <Box
                            sx={(theme)=> ({
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '20px 25px 10px 25px',
                                [theme.breakpoints.down('md')]: {
                                    padding: '20px 0',
                                },
                            })}
                        >
                            <LeftBookItem key={index} book={book} />
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}
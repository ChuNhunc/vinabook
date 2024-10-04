import { Box } from "@mui/material"
import { BookDescription } from "../../molecules/BookDescription"
import { RemarkableProduct } from "./RemarkableProduct"
import { Book } from "../../../store/booksStore"

type BoxDesscription = {
    book: Book
}

export const BoxDesscription = ({book}: BoxDesscription) => {
    return (
        <Box className='box-description' 
            sx={(theme)=> ({
                marginBottom: '40px', 
                display: 'flex', 
                gap: '35px',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    padding: '10px',
                }
            })}>
            <Box className='description' 
                sx={(theme)=> ({ 
                    width: '70%',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                        padding: '20px',
                    }
                })}>
                <BookDescription book={book}/>
            </Box>
            <Box sx={(theme)=> ({
                width: '23%', 
                paddingLeft: '5px',
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                }
            })}>
                <RemarkableProduct/>
            </Box>
        </Box>
    )
}
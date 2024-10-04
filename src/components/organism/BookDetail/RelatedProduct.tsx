import { Box, Typography } from "@mui/material"
import { TextBold } from "../../atoms/typography"
import { Book } from "../../../store/booksStore"
import { CategoryBook } from "../CategoryBook"

type RelatedProductProps = {
    books: Book[]
}

export const RelatedProduct = ({books}: RelatedProductProps) => {
    return (
        <>
            <Box sx={{textAlign: 'center', marginBottom: '20px'}}>
                <Typography 
                    sx={(theme)=>({
                        fontSize: '19px', 
                        color: theme.palette.primary.text,
                        [theme.breakpoints.down('md')]: {
                            fontSize: '20px',
                        }
                    })}>SẢN PHẨM LIÊN QUAN</Typography>
            </Box>
            <Box 
                sx={(theme)=> ({
                    marginBottom: '40px', 
                    overflow: 'hidden',
                    [theme.breakpoints.down('md')]: {
                        padding: '20px',
                        paddingTop: '0',
                    }
                })}>
                <CategoryBook books={books}/>
            </Box>
        </>
    )   
}
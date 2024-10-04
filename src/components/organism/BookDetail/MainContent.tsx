import { Box } from "@mui/material"
import { ProductGallery } from "../../molecules/ProductGallery";
import { Book } from "../../../store/booksStore";
import { BookTextDetail } from "../../molecules/BookTextDetail";
import { LeftInformation } from "./LeftInformation";

type MainContentProps = {
    book: Book
}

export const MainContent = ({book}: MainContentProps) => {
    const mainThumb = book.image || '';
    const subThumbs = [book.image,book.image,book.image]
    return (
        <>
            <Box className='content-left' 
                sx={(theme)=> ({
                    width: '70%', 
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                        flexDirection: 'column',
                    }
                })}>
                <Box className= 'product-gallery' 
                    sx={(theme)=>({
                        width: '50%',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                        }
                    })}>
                    <ProductGallery mainThumb={mainThumb} subThumbs={subThumbs}/>
                </Box>
                <Box className= 'product-detail' 
                    sx={(theme)=>({
                        width: '50%',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                            padding: '20px',
                        }
                    })}
                >
                    <BookTextDetail book={book}/>
                </Box>
            </Box>
            <Box 
                className='content-right' 
                sx={(theme) => ({
                    width: '25%',
                    border: '1px solid #E0E0E0',
                    borderRadius: '5px',
                    marginBottom: '80px',
                    [theme.breakpoints.down('md')]: {
                        display: 'none'
                    }
                })}>
                <LeftInformation/>
            </Box>
        </>
    )
}
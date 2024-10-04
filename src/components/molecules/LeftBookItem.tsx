import { Box, Typography } from "@mui/material";
import { Book, convertString } from "../../store/booksStore";
import { VinaBookImage } from "../atoms/image";
import { BookItemPrice, BookItemPriceSale, BookItemTitle, formatCurrency } from "../atoms/typography";
import { BoxDiscound } from "../atoms/discound";
import { Clear } from "../atoms/clear";
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

export type LeftBookItem = {
    book: Book
}

export const LeftBookItem = ({book}: LeftBookItem) => {
    const navigate = useNavigate();
    return(
        <>
            <Box 
                className='book-container' 
                sx={{
                    width:'33%', 
                    height: '90%',
                    float: 'left',
                    position: 'relative',
                    cursor: 'pointer',
                }}
                onClick= {()=>{
                    const name = convertString(book.title);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate(`/${name}`, { state: JSON.stringify(book) });
                }}
                >
                <VinaBookImage 
                    src={book.image}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
                <BoxDiscound sx={{
                    fontWeight: "200",
                    padding: "2px 5px",
                    borderRadius: '3px',
                    top: '-15px',
                    left: '0px',
                }}>10%</BoxDiscound>
            </Box>
            <Box sx={{width:'65%', float: 'right', paddingLeft: '10px'}}>
                <BookItemTitle sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: theme.palette.primary.text,
                }}>{book.title}</BookItemTitle>
                <BookItemPrice sx={{textDecoration: 'line-through'}}>{formatCurrency(book.price || 0)}</BookItemPrice>
                <BookItemPriceSale>{formatCurrency(book.priceSale || 0)}</BookItemPriceSale>
            </Box>
        </>
    )
}
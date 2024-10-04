import { Box } from "@mui/material"
import { VinaBookImage } from "../atoms/image"
import { BookItemPrice, BookItemPriceSale, BookItemTitle, formatCurrency } from "../atoms/typography"
import { Book, convertString } from "../../store/booksStore"
import { BoxDiscound } from "../atoms/discound"
import { FunctionBox } from "./FunctionBox"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { stat } from "fs"
import theme from "../../theme"

type BookItemProps = {
    book: Book
}

export const BookItem: React.FC<BookItemProps> = ({book}) => {
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    return (
        <Box
            className= 'product-item'
            sx={{
                position: "relative",
                height: "300px",
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
            }}
            onMouseEnter={()=>setDisplay(true)}
            onMouseLeave={()=>setDisplay(false)}
        >
            <FunctionBox display={display} book={book}/>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
                onClick= {()=>{
                    const name = convertString(book.title);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate(`/${name}`, { state: JSON.stringify(book) });
                }}
            >
                <Box sx={{textAlign: 'center', position:'relative', width: '100%', height: '75%'}} className='product-image'>
                    <BoxDiscound 
                        sx={{
                            right: "20px",
                            top: "25px",
                            padding: "1px 10px",
                            border: "1px solid white",
                        }}
                    >10%</BoxDiscound>
                    
                    <VinaBookImage src={book.image} sx={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Box>
                <Box className='product-detail' sx={{paddingLeft: '5px', paddingRight: '5px'}}>
                    <BookItemTitle sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '14px',
                        color: theme.palette.primary.text,
                    }}>{book.title}</BookItemTitle>
                    {book.priceSale ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                gap: '5px'
                            }}
                        >
                            <BookItemPriceSale sx={{
                                color: "red"
                            }}>
                                {formatCurrency(book.priceSale || 0)}
                            </BookItemPriceSale>
                            <BookItemPrice sx={{
                                textDecoration: "line-through",
                                color: "gray"
                            }}>
                                {formatCurrency(book.price || 0)}
                            </BookItemPrice>
                        </Box>
                    ) : (
                        <Box>
                            <BookItemPrice>{formatCurrency(book.price || 0)}</BookItemPrice>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )

}
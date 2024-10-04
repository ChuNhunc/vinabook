import { Box } from "@mui/material"
import { Book } from "../../store/booksStore"
import { BookItemPrice, BookItemPriceSale, formatCurrency, Text, TextBold } from "../atoms/typography"
import { AmountInputForm } from "./AmountInputForm"
import { useContext, useState } from "react"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import styled from "@emotion/styled"

type BookTextDetail = {
    book: Book
}

const AddCartButton = styled('button')({
    border: 'none',
    width: '150px',
    height: '40px',
    marginRight: '20px',
    backgroundColor: '#FF8D07',
    fontWeight: '600',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
})

const BuyButton = styled('button')({
    border: 'none',
    width: '150px',
    height: '40px',
    padding: '0 20px',
    marginRight: '20px',
    backgroundColor: '#343A40',
    fontWeight: '600',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
})

export const BookTextDetail = ({book}: BookTextDetail) => {
    const context = useContext(VinaBooksContext);
    const [amount, setAmount] = useState(context?.cartStore.listCart.length);
    const [productAmount, setProductAmount] = useState(1);

    const handleAmountChange = (newAmount: number) => {
        setProductAmount(newAmount);
    };
    return (
        <>
            <TextBold
                sx={(theme)=> ({
                    fontSize: '24px',
                    color: '#4B4848',
                    marginBottom: '10px',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '2rem',
                    }
                })}
            >
                {book.title}
            </TextBold>
            <Text sx={{color: '#ccc', fontSize: '14px', marginBottom: '10px'}}>ISBN: {book.id}</Text>
            <Text sx={{color: 'black', fontSize: '18px', marginBottom: '10px'}}>{book.supplier}</Text>
            <Box className='product-price' sx={{display: 'flex', gap: '20px', marginBottom: '10px'}}>
                <BookItemPriceSale sx={{fontSize: '22px', fontWeight: '400'}}>{formatCurrency(book.priceSale || 0)}</BookItemPriceSale>
                <BookItemPrice 
                    sx={{fontSize: '16px', 
                    fontWeight: '400', 
                    textDecoration: 'line-through',
                    color: 'gray',
                    paddingTop: '8px'
                }}>{formatCurrency(book.price || 0)}</BookItemPrice>
            </Box>
            <AmountInputForm onAmountChange={handleAmountChange} />
            <Box sx={{marginTop: '20px' ,marginBottom: '10px'}}>
                <AddCartButton
                    onClick={() => {
                        context?.cartStore.addProductToCart(book, productAmount);
                        setAmount(context?.cartStore.getAmount());
                    }}
                >
                    Thêm vào giỏ
                </AddCartButton>
                <BuyButton>
                    Mua ngay
                </BuyButton>
            </Box>
        </>
    )
}
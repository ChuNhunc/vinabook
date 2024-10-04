import { Box, colors, SxProps, Theme } from "@mui/material"
import { Icon } from "../atoms/icon"
import { useContext, useState } from "react"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { LeftBookItem } from "./LeftBookItem"
import { BookItemPrice, BookItemPriceSale, BookItemTitle, formatCurrency, Text, TextBold } from "../atoms/typography"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { convertString } from "../../store/booksStore"
import { VinaBookImage } from "../atoms/image"
import { BoxDiscound } from "../atoms/discound"
import theme from "../../theme"

type CartProps = {
    number: number
    sx?: SxProps<Theme>
}

const CartButton = styled('button') ({
    backgroundColor: theme.palette.primary.main,
    border: "none",
    padding: "8px 15px",
    borderRadius: "3px",
    color: '#fff',
})

export const Cart = ({number, sx}: CartProps)=> {
    const context = useContext(VinaBooksContext);
    const [display, setDisplay] = useState(false);
    return (
        <>
                <Box 
                    sx={(theme) => ({
                        position: "fixed",
                        backgroundColor: theme.palette.primary.main,
                        width: "50px",
                        height: "70px",
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "center",
                        borderBottomLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                        top: '0',
                        right: "5px",
                        zIndex: 1001,
                        cursor: "pointer",
                        [theme.breakpoints.down('lg')]: {
                            display: "none"
                        }
                    })}
                    onClick={()=> {setDisplay(!display)}}
                >
                <Box sx= {{position: "relative"}}>
                    <Icon name="cart" sx={{
                        color: colors.common.white,
                        fontSize: "40px",
                        marginBottom: "5px",
                        position: "relative",
                    }}></Icon>
                    <Box sx={{
                            position: "absolute",
                            backgroundColor: colors.common.white,
                            borderRadius: "100%",
                            top: '0px',
                            right: '0',
                            width: '15px',
                            height: '15px',
                            fontSize: '12px',
                            fontWeight: '700',
                            textAlign: 'center',
                        }}>{number}
                    </Box>
                    <Box
                        sx={{
                            display: display ? "block" : "none",
                            position: "absolute",
                            backgroundColor: colors.common.white,
                            width: "300px",
                            maxHeight: "450px",
                            top: "20px",
                            right: "45px",
                            borderRadius: '5px',
                            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                            paddingTop: '10px',
                            overflowY: 'auto'
                        }}
                    >
                        {context?.cartStore && context.cartStore.listCart.length > 0 ? 
                            (context.cartStore.listCart.map((item, index) => {
                                return (
                                    <Box 
                                        sx={{
                                            backgroundColor: theme.palette.primary.background,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            height: '130px',
                                            padding: '20px 25px 10px 25px',
                                            borderBottom: '1px solid #f0f0f0',
                                            position: 'relative',
                                        }}>
                                        <LeftBookItem key={index} book={item.book} />
                                        <Box
                                            sx={{
                                                width: "30px",
                                                height: "30px",
                                                position: "absolute",
                                                textAlign: "center",
                                                bottom: "45px",
                                                right: "40px",
                                                backgroundColor: "#F5F5F5",
                                                color: "gray",
                                            }}
                                        >
                                            {item.amount}
                                        </Box>
                                    </Box>
                                )
                            }) 
                            ): (
                            <Box 
                                className='no-product'
                                sx={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    borderBottom: '1px solid #f0f0f0'
                                }}
                            > 
                                <Icon name="cart" sx={{fontSize: '80px', color: '#677279'}}/>
                                <Text sx={{color: '#677279'}}>Hiện chưa có sản phẩm</Text>
                            </Box>    
                        )}
                        <Box>
                            <Box className='total-price'
                                sx={{
                                    overflow: 'hidden',
                                    padding: '20px 10px'
                                }}
                            >
                                <Text sx={{float: 'left'}}>TỔNG TIỀN</Text>
                                <TextBold sx={{float: 'right', color: 'red'}}>{formatCurrency(context?.cartStore.getTotalPrice() || 0)}</TextBold>
                            </Box>
                            <Box 
                                sx={{
                                    marginBottom: '20px',
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <CartButton>XEM GIỎ HÀNG</CartButton>
                                <CartButton>THANH TOÁN</CartButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const CartBookItem = ({book}: LeftBookItem) => {
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
                    color: '#4b4848',
                }}>{book.title}</BookItemTitle>
                <Box>
                    {book.priceSale ? 
                    <BookItemPriceSale>{formatCurrency(book.priceSale || 0)}</BookItemPriceSale> :
                    <BookItemPrice sx={{textDecoration: 'line-through'}}>{formatCurrency(book.price || 0)}</BookItemPrice>
                    }
                </Box>
            </Box>
        </>
    )
}

export const CartResponsive = ({number, sx}: CartProps)=> {
    const context = useContext(VinaBooksContext);
    const [display, setDisplay] = useState(false);
    return (
        <Box
            sx= {{position: "relative", paddingTop: '7px'}}
            onClick ={()=> {setDisplay(!display)}}
        >
            <Icon name="cart" sx={{
                color: colors.common.white,
                fontSize: "2rem",
                marginBottom: "5px",
                position: "relative",
            }}
        />
            <Box sx={{
                    position: "absolute",
                    backgroundColor: colors.common.white,
                    borderRadius: "100%",
                    top: '2px',
                    right: '0',
                    width: '15px',
                    height: '15px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textAlign: 'center',
                    color: colors.common.black,
                }}>{number}
            </Box>
            <Box
                sx={{
                    display: display ? "block" : "none",
                    position: "absolute",
                    backgroundColor: colors.common.white,
                    width: "300px",
                    maxHeight: "450px",
                    top: "20px",
                    right: "45px",
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    paddingTop: '10px',
                    overflowY: 'auto',
                    zIndex: '100',
                }}
            >
                {context?.cartStore && context.cartStore.listCart.length > 0 ? 
                    (context.cartStore.listCart.map((item, index) => {
                        return (
                            <Box 
                                sx={{
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '130px',
                                    padding: '20px 25px 10px 25px',
                                    borderBottom: '1px solid #f0f0f0',
                                    position: 'relative',
                                }}>
                                <CartBookItem key={index} book={item.book} />
                                <Box
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        position: "absolute",
                                        textAlign: "center",
                                        bottom: "10px",
                                        right: "40px",
                                        backgroundColor: "#F5F5F5",
                                        color: "gray",
                                    }}
                                >
                                    {item.amount}
                                </Box>
                            </Box>
                        )
                    }) 
                    ): (
                    <Box 
                        className='no-product'
                        sx={{
                            textAlign: 'center',
                            padding: '20px',
                            borderBottom: '1px solid #f0f0f0'
                        }}
                    > 
                        <Icon name="cart" sx={{fontSize: '80px', color: '#677279'}}/>
                        <Text sx={{color: '#677279'}}>Hiện chưa có sản phẩm</Text>
                    </Box>    
                )}
                <Box>
                    <Box className='total-price'
                        sx={{
                            overflow: 'hidden',
                            padding: '20px 10px'
                        }}
                    >
                        <Text sx={{float: 'left'}}>TỔNG TIỀN</Text>
                        <TextBold sx={{float: 'right', color: 'red'}}>{formatCurrency(context?.cartStore.getTotalPrice() || 0)}</TextBold>
                    </Box>
                    <Box 
                        sx={{
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <CartButton>XEM GIỎ HÀNG</CartButton>
                        <CartButton>THANH TOÁN</CartButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
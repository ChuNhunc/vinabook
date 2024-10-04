import { Box, SxProps } from "@mui/material"
import { Icon } from "../atoms/icon"
import React, { useContext, useState } from "react"
import { Theme } from "@emotion/react"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { Book, convertString } from "../../store/booksStore"
import { useNavigate } from "react-router-dom"

type IconBox = {
    children: React.ReactNode
    onClick?: () => void
}

type FunctionBox = {
    sx?: SxProps<Theme>
    display: boolean
    book: Book
}

export const IconBox = ({children, onClick}: IconBox)=> {
    return (
        <>
            <Box
                sx={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50px',
                    backgroundColor: '#f5f5f5',
                    fontSize: '16px',
                    paddingLeft: '6px',
                    ":hover": {
                        backgroundColor: '#333',
                        color: 'white',
                        cursor: 'pointer'
                    }
                }}
                onClick={onClick}
            >
                {children}
            </Box>
        </>
    )
}

export const FunctionBox = ({sx, display,book}: FunctionBox) => {
    const context = useContext(VinaBooksContext);
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{
                position: 'absolute', 
                display: display ? 'flex' : 'none', 
                gap: '10px', 
                top: '170px', 
                left: '15px',
                zIndex: 10,
                ...sx
            }}>
                <IconBox
                    onClick={()=>context?.cartStore.addProductToCart(book,1)}
                >
                    <Icon sx={{marginTop: '6px'}} name="add-cart"/>
                </IconBox>
                <IconBox>
                    <Icon sx={{marginTop: '6px'}} name="quick-view"/>
                </IconBox>
                <IconBox
                    onClick= {()=>{
                        const name = convertString(book.title);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/${name}`, { state: JSON.stringify(book) });
                    }}
                >
                    <Icon sx={{marginTop: '6px'}} name="see-more"/>
                </IconBox>
            </Box>
        </>
    )
}
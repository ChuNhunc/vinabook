import { SxProps, Theme, Typography } from "@mui/material"
import React from "react"

type Text = {
    children?: React.ReactNode
    sx?: SxProps<Theme>
}

export const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

export const Link = ({children, sx} : Text) => {
    return (
        <Typography 
            className="link"
            sx={{
                fontWeight: '400' ,
                cursor: 'pointer',
                fontSize: "14px",
                ...sx,
                '&.link:hover': {
                    color: '#EC8000'
                }
            }} >
            {children}
        </Typography>
    )
}

export const LinkBold = ({children, sx} : Text) => {
    return (
        <Typography
            className="link"
            sx={{
                fontWeight: '700' ,
                cursor: 'pointer',
                fontSize: "16px",
                ...sx,
                '&.link:hover': {
                    color: '#EC8000'
                }
            }} >
            {children}
        </Typography>
    )
}

export const Text = ({children, sx} : Text) => {
    return (
        <>
            <Typography 
                variant="body2"
                className="text-small"
                sx={{
                    ...sx
                }} >
                {children}
            </Typography>
        </>
    )
}

export const TextBold = ({children, sx} : Text) => {
    return (
        <Typography 
            sx={{
                fontWeight: '700' ,
                ...sx
            }}>
            {children}
        </Typography>
    )
}


export const BookItemTitle = ({children, sx} : Text) => {
    return (
        <Typography 
            sx={{
                fontWeight: '700',
                fontSize: "16px",
                ...sx
            }} >
            {children}
        </Typography>
    )
}

export const BookItemPrice = ({children, sx} : Text) => {
    return (
        <Typography 

            sx={{
                fontWeight: '200',
                fontSize: "16px",
                ...sx
            }} >
            {children}
        </Typography>
    )
}

export const BookItemPriceSale = ({children, sx} : Text) => {
    return (
        <Typography 

            sx={{
                fontWeight: '200',
                fontSize: "16px",
                color: 'red',
                ...sx
            }} >
            {children}
        </Typography>
    )
}

export const CategoryTitle = ({children, sx} : Text) => {
    return (
        <Typography 
            sx={{
                fontWeight: '400',
                color: '#4b4848',
                '&.MuiTypography-root': {
                    fontSize: "1rem",
                },
                ...sx
            }}>
            {children}
        </Typography>
    )
}

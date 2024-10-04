import { Box, SxProps } from "@mui/material";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Information } from "../molecules/Information";
import { Cart } from "../molecules/cart";
import { Header } from "../organism/Header";
import { Clear } from "../atoms/clear";
import { Footer } from "../organism/Footer";
import { Theme } from "@emotion/react";
import { VinaBooksContext } from "../../context/VinaBooksContext";
import { observer } from "mobx-react-lite";

type MainTemplateProps = {
    children?: ReactNode;
    sx?: SxProps<Theme>
}

export const MainTemplate = observer(({children,sx}: MainTemplateProps) => {
    const context = useContext(VinaBooksContext);
    return (
        <>
            <Box className="App" 
                sx={{
                minHeight: '100vh',
                overflowX: 'hidden',
                ...sx
                }}
            
            >
                <Information></Information>
                <Cart number={context?.cartStore.getAmount()|| 0}></Cart>
                <Box
                    sx={{
                        width: '100%',
                        marginBottom: '20px',
                    }}
                >
                    <Header></Header>
                </Box>
                {children}
                <Clear></Clear>
                <Footer/>
            </Box>
        </>
    )
})
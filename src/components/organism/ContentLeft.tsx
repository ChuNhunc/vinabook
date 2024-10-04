
import { Box } from "@mui/material"
import { Navigation, NavigationResponsive } from "./Navigation"
import { VinaBookImage } from "../atoms/image"
import { LeftBookItem } from "../molecules/LeftBookItem"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { useContext } from "react"
import data from '../../data/book.json'
import { BoxDiscound } from "../atoms/discound"
import { Book } from "../../store/booksStore"


export const LeftListBook = () => {
    const context = useContext(VinaBooksContext);
    
    if (!context) {
        return null;
    }

    return (
        <>
            {context.booksStore.books.slice(0, 10).map((book, index) => (
                <Box 
                    sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '20px 25px 10px 25px',
                    }}>
                    <LeftBookItem key={index} book={book} />
                </Box>
            ))}
        </>
    );
}

export const ContentLeft = () => {
    return (
        <>
            <Box 
                sx={(theme) => ({
                width: '25%',
                float: 'left',
                paddingRight: '25px',
                [theme.breakpoints.down('md')]: {
                    width: '95%',
                    padding: '0px',
                    marginLeft: '10px',
                }
                })}
            >
                <Box
                    sx={(theme) => ({
                        [theme.breakpoints.down('md')]: {
                            display: 'none',
                        }
                    })}
                >
                    <Navigation></Navigation>
                </Box>
                <Box 
                    sx={{
                        padding: '10px', 
                        backgroundColor: 'white',
                        borderTop: '1px solid #ccc',
                        borderBottom: '1px solid #ccc',
                    }}>
                    <VinaBookImage 
                        src="widget_banner.webp" 
                        sx={{
                            width: '100%',
                        }}
                    />
                </Box>
                <LeftListBook/>
                
            </Box>
        </>
    )
}
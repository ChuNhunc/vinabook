import { Box } from "@mui/material"
import { TabProduct } from "../../store/TabProductStore"
import { BookItem } from "./BookItem"

export const TabBooks = (tabProduct: TabProduct) => {
    return (
        <>
            <Box 
                sx={(theme)=>({
                    backgroundColor: 'white', 
                    overflow: 'hidden', 
                    padding: '20px',
                    [theme.breakpoints.down('md')]: {
                        padding: '5px'
                    }
                })}>
                {tabProduct.books.map((item, index) => {
                    return (
                        <Box sx={(theme)=>({
                            width: '25%',
                            height: '300px', 
                            float: 'left', 
                            marginBottom: '20px',
                            [theme.breakpoints.down('md')]: {
                                width: '50%',
                                padding: '0'
                            }
                        })}>
                            <BookItem book={item} key={index}/>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}
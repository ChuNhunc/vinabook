import { useLocation } from "react-router-dom";
import { MainTemplate } from "../template/MainTemplate"
import { useContext } from "react";
import { VinaBooksContext } from "../../context/VinaBooksContext";
import { BoxTop } from "../organism/BookDetail/BoxTop";
import { MainContent } from "../organism/BookDetail/MainContent";
import { Box } from "@mui/material";
import { Container } from "../atoms/container";
import { Book } from "../../store/booksStore";
import { RelatedProduct } from "../organism/BookDetail/RelatedProduct";
import { ListFixedSocialMedia } from "../organism/BookDetail/ListFixedSocialMedia";
import { BoxDesscription } from "../organism/BookDetail/BoxDescription";
import { observer } from "mobx-react-lite";
import theme from "../../theme";

export const BookDetailPage = observer(() => {
    const context = useContext(VinaBooksContext);
    const location = useLocation();
    const book: Book = JSON.parse(location.state) || {};
    const listBook = context?.booksStore.books
        .filter(item => item.categoryId === book.categoryId && item.id !== book.id);
    return (
        <>
            <MainTemplate sx={{backgroundColor: theme.palette.primary.background,}}>
                <BoxTop catName = {context?.getCatName(book.categoryId) || ''} bookName = {book.title || ''}/>
                <ListFixedSocialMedia/>
                <Container>
                    <Box 
                        className='main-content'
                        sx= {{
                            padding: '40px 0',
                            display: 'flex',
                            gap: '40px',
                        }}
                    >
                        <MainContent book={book}/>
                    </Box>
                </Container>
                <Container>
                    <BoxDesscription book={book}/>
                </Container>
                <Container>
                    <Box>
                        <RelatedProduct books={listBook || []}/>
                    </Box>
                </Container>
            </MainTemplate>
        </>
    )
})
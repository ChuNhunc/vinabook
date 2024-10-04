import { useContext } from "react"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { Book, convertString } from "../../store/booksStore"
import { BookItem } from "../molecules/BookItem"
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


type ListCategoryBookProps = {
    books: Book[];
};

export const CategoryBook: React.FC<ListCategoryBookProps> = ({ books }) => {
    const navigate = useNavigate();
    return (
        <>
            {books.map((book) => (
                <Box 
                    sx={(theme)=>({
                        width: '25%', 
                        float: 'left', 
                        paddingLeft: '10px', 
                        paddingRight: '10px',
                        [theme.breakpoints.down('md')]: {
                            width: '50%',
                            padding: '0'
                        }
                    })}
                >
                    <BookItem book={book}></BookItem>
                </Box>
            ))}
        </>
    );
};

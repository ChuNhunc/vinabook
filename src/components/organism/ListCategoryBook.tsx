import { Box } from "@mui/material";
import { CategoriesHeader } from "../molecules/CategoryTitle";
import { useContext } from "react";
import { VinaBooksContext } from "../../context/VinaBooksContext";
import { Book } from "../../store/booksStore";
import { CategoryBook } from "./CategoryBook";
import { BoxContainer } from "../atoms/BoxContainer";
import theme from "../../theme";

const findCategoryNameById = (id: number, categories: any[]): string | undefined => {
    for (const category of categories) {
        if (category.id === id) {
            return category.name;
        }
        if (category.subCategories) {
            for (const subCategory of category.subCategories) {
                if (subCategory.id === id) {
                    return subCategory.name;
                }
            }
        }
    }
    return undefined;
};

export const ListCategoryBook = () => {
    const context = useContext(VinaBooksContext);
    const listId: number[] = [32,64,111,5,44];
    return (
        <>
            {listId.map((id) => {
                const name = findCategoryNameById(id, context?.categoriesStore.categories || []);
                const books: Book[] = context?.booksStore.books.filter((book) => book.categoryId === id) || [];
                return (
                    <BoxContainer>
                        <CategoriesHeader>{name}</CategoriesHeader>
                        <Box sx={{width: '100%', backgroundColor: theme.palette.primary.background, overflow: 'hidden', paddingTop: '10px'}}>
                            <CategoryBook
                                 books={books.slice(0,4)}
                            />
                        </Box>
                    </BoxContainer>
                )
            })}
        </>
    )
}
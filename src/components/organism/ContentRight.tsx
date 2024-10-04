import { Box } from "@mui/material"
import { Slider } from "../molecules/Slider"
import { SmallBookBanner } from "../molecules/SmallBookBanner"
import { HomeTabProduct } from "./HomeTabProduct"
import { VinaBookImage } from "../atoms/image"
import { BoxContainer } from "../atoms/BoxContainer"
import { CategoriesHeader } from "../molecules/CategoryTitle"
import { CategoryBook } from "./CategoryBook"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { useContext } from "react"
import { ListCategoryBook } from "./ListCategoryBook"
import { ListPublisherImage } from "../molecules/ListPublisherImage"
import { PublisherList } from "./PublisherList"


export const ContentRight = () => {
    const context = useContext(VinaBooksContext);
    const books = context?.booksStore.books || [];
    return (
        <>
            <Box sx={(theme) => ({
                width: '75%',
                float: 'right',
                alignContent: 'center',
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }
            })}>
                <Box className='slider' sx={{}}>
                    <Slider src='home_slider_image_1.webp'></Slider>
                </Box>
                <BoxContainer className= 'book-banner' sx={{float: 'left',width: '100%'}}>
                    <Box   
                        sx={(theme)=> ({
                            width: '48%',
                            float: 'left',
                            [theme.breakpoints.down('md')]: {
                                width: '100%',
                            }
                        })}>
                        <SmallBookBanner src='htb_img_1.webp' />
                    </Box>
                    <Box 
                        sx={(theme)=> ({
                            width: '48%',
                            float: 'right',
                            [theme.breakpoints.down('md')]: {
                                width: '100%',
                            }
                        })}>
                        <SmallBookBanner src='htb_img_2.webp'/>
                    </Box>
                </BoxContainer>
                <BoxContainer sx={{float: 'left', width: '100%', marginBottom: '30px'}}>
                    <HomeTabProduct/>
                </BoxContainer>
                <BoxContainer className= 'book-ad'
                    sx={{
                        float: 'left'
                    }}
                >
                    <Box sx={(theme)=> ({ 
                        width: '22.6%',
                        float: 'left',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                           textAlign: 'center',
                        }   
                    })}>
                        <VinaBookImage src="book-ad.webp"/>
                    </Box>
                    <Box 
                        sx={(theme)=>({
                            width: '75%', 
                            float: 'right',
                            [theme.breakpoints.down('md')]: {
                                width: '100%',
                                textAlign: 'center',
                            }
                        })}>
                        <SmallBookBanner src="book-ad2.webp"/>
                    </Box>
                </BoxContainer>
                <Box>
                    <ListCategoryBook/>
                </Box>
                <BoxContainer>
                    <PublisherList/>
                </BoxContainer>
            </Box>
        </>
    )
}
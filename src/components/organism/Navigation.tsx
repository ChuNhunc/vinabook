import { useContext, useState } from "react";
import { VinaBooksContext } from "../../context/VinaBooksContext";
import { Box, List, ListItem } from "@mui/material";
import { CategoriesItem, SubCategoryItem } from "../molecules/CategoryItem";
import { observer } from "mobx-react-lite";
import { SubCategory } from "../molecules/SubCategory";
import { Text } from "../atoms/typography";
import { Icon } from "../atoms/icon";
import { Margin } from "@mui/icons-material";


export const Navigation = observer(() => {
    const context = useContext(VinaBooksContext);
    const categories = context ? context.categoriesStore.categories : [];
    const [subCatDisplay, setSubCatDisplay] = useState(Array(categories.length).fill('none'));
    return (
        <>
            <Box 
                sx={{ 
                    paddingTop: '10px',
                    paddingLeft: '10px',
                    width: '250px',
                    boxSizing: 'border-box',
                    backgroundColor: 'white',
                }}
            >
                <Text sx={{mt: '10px', fontSize: '16px', }}>Danh Mục</Text>
                <List>
                    {categories.map((item, index)=> (
                        <CategoriesItem
                            text={item.name}
                            sx={{
                                position: 'relative',
                                padding: '0',
                                '&:hover .box-icon': {
                                    backgroundColor: '#ccc',
                                },
                            }}
                            onMouseEnter={() => {
                                let newDisplay = Array(categories.length).fill('none');
                                newDisplay[index] = 'block';
                                setSubCatDisplay(newDisplay);
                            }}
                            onMouseLeave={() => {
                                setSubCatDisplay(Array(categories.length).fill('none'));
                            }}
                        >
                            {item.subCategories.length === 0 ? <></> : 
                                <List
                                    className="sub-nav"
                                    sx={{
                                        position: "absolute",
                                        top: '0px',
                                        left: '240px',
                                        display: subCatDisplay[index],
                                        border: '4px solid #ccc',
                                        backgroundColor: 'white',
                                        paddingLeft: '10px',
                                    }}
                                >
                                    {item.subCategories.map((subItem, subIndex) => (
                                        <SubCategoryItem key={subIndex} text={subItem.name}></SubCategoryItem>
                                    ))}
                                </List>
                            }
                        </CategoriesItem>
                    ))}
                </List>
            </Box>
        </>
    );
});

export const NavigationResponsive = observer(() => {
    const context = useContext(VinaBooksContext);
    const categories = context ? context.categoriesStore.categories : [];
    const [subCatDisplay, setSubCatDisplay] = useState(Array(categories.length).fill(false));
    const [display, setDisplay] = useState(false);
    return (
        <>
        <Box
            sx={{position: 'relative', cursor: 'pointer'}}
            onClick={() => {setDisplay(!display)}}
        >
            <Icon 
                sx={(theme)=> ({
                    fontSize: '2.3rem',
                    [theme.breakpoints.down('mobile')]: {
                        fontSize: '1.5rem'
                    }
                })} 
                name="menu"
            />
        </Box>
        <Box 
            sx={{ 
                position: 'absolute',
                top: '40px',
                right: '-20px',
                paddingTop: '10px',
                paddingLeft: '10px',
                width: '260px',
                boxSizing: 'border-box',
                backgroundColor: 'white',
                display: display ? 'block' : 'none',  
                overflowY: 'auto',
                height: '430px',
            }}
        >
            <List>
                {categories.map((item, index)=> (
                    
                        <CategoriesItem
                            text={item.name}
                            sx={{
                                display: 'inline-block',
                                position: 'relative',
                                padding: '0',
                                margin: '0'
                            }}
                            onClick={()=> {
                                console.log('1' + subCatDisplay[index])
                                const newCategory = [...subCatDisplay];
                                newCategory[index] = !newCategory[index];
                                console.log('2' + subCatDisplay[index])
                                setSubCatDisplay(newCategory);
                            }}
                        >
                            {item.subCategories.length === 0 ? <></> : 
                                <List
                                    className="sub-nav"
                                    sx={{
                                        top: '0px',
                                        left: '0px',
                                        backgroundColor: 'white',
                                        display: subCatDisplay[index] ? 'block' : 'none',
                                    }}
                                >
                                    {item.subCategories.map((subItem, subIndex) => (
                                        <SubCategoryItem key={subIndex} text={subItem.name}></SubCategoryItem>
                                    ))}
                                </List>
                            }
                        </CategoriesItem>
                    ))}
            </List>
            </Box>
        </>
    );
})
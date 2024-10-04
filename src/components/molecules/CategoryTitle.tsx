import { BoxContainer } from "../atoms/BoxContainer"
import { CategoryTitle } from "../atoms/typography"
import { Icon } from "../atoms/icon"
import { Box, Typography } from "@mui/material"

type CategoriesHeader = {
    children?: string
}

export const CategoriesHeader = ({children}: CategoriesHeader)=>{
    return (
        <>
            <BoxContainer>
                <Typography
                    sx={(theme)=> ({
                        fontWeight: '400',
                        color: '#4b4848',
                        width: '60%', 
                        float: 'left',
                        fontSize: '20px',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '1.5rem',
                        }
                    })}>{children}</Typography>
                <Box className='box-icon'
                    sx={{
                        float: 'right',
                    }}
                >
                    <Icon name="arrow-left" 
                        sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: '#EC8000'
                            }
                        }}
                    ></Icon>
                    <Icon name="arrow-right" 
                        sx={{
                            cursor: 'pointer',
                            ":hover": {
                                color: '#EC8000'
                            }
                        }}
                    ></Icon>
                </Box>
            </BoxContainer>
        </>
    )
}
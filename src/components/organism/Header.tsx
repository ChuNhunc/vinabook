import { Box } from "@mui/material"
import { Container } from "../atoms/container"
import { VinaBookImage } from "../atoms/image"
import { SearchBar } from "../molecules/InputForm"
import { Text } from "../atoms/typography"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Icon } from "../atoms/icon"
import { Navigation } from "@mui/icons-material"
import { NavigationResponsive } from "./Navigation"
import styled from "@emotion/styled"

const HeaderText = styled('text') (({theme})=>({
    fontWeight: '200',
    fontSize: '14px',
}))
export const Header = () => {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Box sx={{
                width: '100%',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                zIndex: '99',
                backgroundColor: 'white',
                position: isSticky ? 'fixed' : '',
                top: 0,
                transition: 'all 0.3s ease',
            }}>
                <Container>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: '40px',
                        padding: '26px 0',
                        position: 'relative',
                        justifyContent:'space-between',
                    }}>
                        <Box 
                            sx={(theme) => ({
                                cursor: 'pointer', 
                                padding: '10px', 
                                boxSizing: 'border-box',
                                [theme.breakpoints.down('md')]: {
                                    width: '60%'
                                }
                            })}
                            onClick = {()=> {navigate('/')}}
                        >
                            <VinaBookImage src="logo.webp"></VinaBookImage>
                        </Box>
                        <Box sx={(theme) => ({
                            width: '50%', 
                            position: 'relative',
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        })
                        }>
                            <SearchBar/>
                        </Box>
                        <Box sx={(theme)=> ({
                            display:'flex', 
                            gap: '10px',
                            [theme.breakpoints.down('md')]: {
                                display: 'none'
                            }
                        })}>
                            <Box sx={{paddingTop: '10px'}}>
                                <VinaBookImage src="phone-call.webp"></VinaBookImage>
                            </Box>
                            <Box 
                                sx= {(theme)=> ({
                                    display: 'flex',
                                    flexDirection: 'column',
                                    [theme.breakpoints.down('md')]: {
                                        display: 'none'
                                    }
                                })}
                            >
                                <HeaderText>Tư vấn bán hàng</HeaderText>
                                <HeaderText>19006401</HeaderText>
                            </Box>
                        </Box>
                        <Box 
                            className='header-responsive'
                            sx={(theme)=> ({
                                display: 'none',
                                fontSize: '2.5rem',
                                [theme.breakpoints.down('md')]: {
                                    position: 'absolute',
                                    display: 'flex',
                                    gap: '20px',
                                    right: '20px',
                                    width: '20%',
                                    fontSize: '2.5rem',
                                },
                                [theme.breakpoints.down('mobile')]: {
                                    fontSize: '1.5rem'
                                }
                            })}   
                        >
                            <Box>
                                <Icon 
                                    sx={(theme)=> ({
                                        fontSize: '2.3rem',
                                        [theme.breakpoints.down('mobile')]: {
                                            fontSize: '1.5rem'
                                        }
                                    })} 
                                    name="search"
                                />
                            </Box>
                            <Box>
                                <NavigationResponsive/>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
import { Box } from "@mui/material"
import { Icon } from "../atoms/icon"
import { Link, LinkBold, TextBold } from "../atoms/typography"
import { Container } from "../atoms/container"
import { CartResponsive } from "./cart"
import { useContext } from "react"
import { VinaBooksContext } from "../../context/VinaBooksContext"

export const Information = () => {
    const context = useContext(VinaBooksContext);
    return (
        <>
            <Box sx={(theme)=> ({
                display: "flex",
                gap: "10px",
                color: "white",
                backgroundColor: "#417505",
                height: '50px',
                [theme.breakpoints.down('lg')]: {
                    display: 'block'
                }
            })}>
                <Container 
                    sx={{
                        position: "relative",
                        display: 'flex',
                        gap: '40px',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    <Box 
                        sx={(theme) => ({
                           display: "flex", 
                            gap: '10px',
                            [theme.breakpoints.down('lg')]: {
                                display: "none"
                            }
                        })}
                        >
                        <Icon name="phone"></Icon>
                        <Link>19006401</Link>
                    </Box>
                    <Box 
                        sx={(theme) => ({
                            display: "flex", 
                             gap: '10px',
                             [theme.breakpoints.down('lg')]: {
                                 display: "none"
                             }
                         })}
                    >
                        <Icon name="mail"></Icon>
                        <Link>hotro@vinabook.com</Link> 
                
                    </Box>
                    <Box 
                        sx={(theme) => ({
                            display: "flex", 
                             gap: '10px',
                             [theme.breakpoints.down('lg')]: {
                                 display: "none"
                             }
                         })}
                    >
                        <Icon name="map-mark"></Icon>
                        <Link>52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh</Link>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                             gap: '10px',
                             [theme.breakpoints.down('lg')]: {
                                 float: 'left',
                                 marginLeft: '10px'
                             }
                         })}
                    >
                        <LinkBold sx={{
                            cursor: "pointer"
                        }}>TÀI KHOẢN</LinkBold>
                        <LinkBold sx={{
                            cursor: "pointer"
                        }}>ĐĂNG XUẤT</LinkBold>
                    </Box>
                    <Box 
                        sx={(theme) => ({
                            display: 'none',
                            [theme.breakpoints.down('lg')]: {
                                display: 'block',
                                position: 'absolute',
                                right: '10px'
                            }
                        })}
                    >
                        <CartResponsive number={context?.cartStore.getAmount()|| 0}/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
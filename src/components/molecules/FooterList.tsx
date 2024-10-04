import { Box, List, ListItem } from "@mui/material"
import { useContext } from "react"
import { VinaBooksContext } from "../../context/VinaBooksContext"
import { observer } from "mobx-react-lite"
import { FooterList } from "../../store/footerListStore"
import { Link, Text } from "../atoms/typography"
import { VinaBookImage } from "../atoms/image"
import data from '../../data/footerList.json'

export const FooterListText = (footerList: FooterList) => {
    return (
        <>
            <Box  
                sx={(theme)=>({
                    width: '100%',
                    [theme.breakpoints.down('md')]: {
                        margin: '10px 0',
                        padding: '0 10px',
                    }
                })}>
                <Text 
                    sx={(theme)=>({
                        fontWeight: '500', 
                        mb: '20px', 
                        fontSize: '16px',
                        [theme.breakpoints.down('md')]: {
                            display: 'inline-block',
                            width: '100%',
                            fontWeight: '700'
                        }
                    })}>{footerList.title}</Text>
                <Box 
                    sx={(theme)=> ({
                        [theme.breakpoints.down('md')]: {
                            display: 'none',
                        }
                    })}
                >
                    <Box className='row'>
                        {footerList.item.map((item, index) => {
                            return (
                                <Box className='col' key={index}>
                                    <Link sx={{color: '#686868', fontWeight: '200',margin: '10px 0'}}>{item}</Link>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const FooterListImage = (footerList: FooterList) => {
    return (
        <>
            <Box 
                sx={(theme)=> ({
                    padding: '0 10px', 
                    marginBottom: '20px',
                    [theme.breakpoints.down('md')]: {
                        margin: '10px 0'
                    }
                })}>
                <Text 
                    sx={(theme)=> ({
                        fontWeight: '500', 
                        mb: '20px', 
                        fontSize: '16px',
                        [theme.breakpoints.down('md')]: {
                            display: 'inline-block',
                            width: '100%',
                            fontWeight: '700'
                        }
                    })}>{footerList.title}</Text>
                <Box 
                    sx={(theme)=> ({
                        width:'100%',
                        [theme.breakpoints.down('md')]: {
                            display: 'none',
                        }
                    })}>
                    <Box className='row' sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px',}}>
                        {footerList.item.map((item, index) => {
                            if (footerList.id === 4 || footerList.id === 5) {
                                return (
                                    <Box className='col' key={index} sx={{ flex: '1 1 calc(33% - 16px)', boxSizing: 'border-box',}}>
                                        <VinaBookImage src={item} sx={{ width: '100%' }} />
                                    </Box>
                                );
                            }
                            return (
                                <Box className= 'col' key={index}>
                                    <VinaBookImage src={item} sx={{width: '100%'}}/>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const ListFooter = observer(() => {
    return (
        <Box className = 'row' 
            sx={(theme) => ({
                width: '100%',
                display: 'flex', 
                paddingTop: '50px',
                flexDirection: 'row',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    paddingTop: '20px',
                }
            })}>
            <Box className='col-md-6' 
                sx={(theme)=>({
                    width: '50%', 
                    display: 'flex',
                    flexDirection: 'row',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                        width: '100%',
                    }
                })}>
                {data.map((listItem, index) => {
                    if (listItem.type === 'text') {
                        return <FooterListText key={index} {...listItem} />;
                    }
                })}
            </Box>
            <Box className='col-md-6' 
                sx={(theme)=> ({
                    width: '50%', 
                    display:'flex',
                    flexDirection: 'row',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                        width: '100%',
                    }
                })}>
                <Box sx={(theme)=>({
                    width:'33%',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                    }
                })}>
                    <Box><FooterListImage {...data[3]}/></Box>
                    <Box sx={{marginTop: '20px'}}><FooterListImage {...data[4]} /></Box>
                </Box>
                <Box sx={(theme)=>({
                    width:'33%',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                    }
                })}>
                    <FooterListImage {...data[5]} />
                </Box>
                <Box sx={(theme)=>({
                    width:'33%',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                    }
                })}>
                    <FooterListImage {...data[6]} />
                </Box>
            </Box>
        </Box>
    );
})
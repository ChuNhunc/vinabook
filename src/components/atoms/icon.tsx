import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { SxProps } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '@mui/system';

type Icon = {
    name: string
    sx?: SxProps<Theme>
    children?: React.ReactNode
}

export const Icon = ({name, sx, children} : Icon)=> {
    switch(name) {
        case 'phone':
            return (
                <PhoneInTalkOutlinedIcon sx={sx} className={'icon ' + name}>{children}</PhoneInTalkOutlinedIcon>
            ) 
        case 'map-mark':
            return (
                <RoomIcon sx={sx} className={'icon ' + name}>{children}</RoomIcon>
            )
        case 'mail':
            return (
                <EmailOutlinedIcon sx={sx} className={'icon ' + name}>{children}</EmailOutlinedIcon>
            )
        case 'cart':
            return (
                <ShoppingCartOutlinedIcon sx={sx} className={'icon ' + name}>{children}</ShoppingCartOutlinedIcon>
            )
        case 'add-cart':
            return (
                <AddShoppingCartOutlinedIcon sx={sx} className={'icon ' + name}>{children}</AddShoppingCartOutlinedIcon>
            )
        case 'see-more':
            return (
                <RemoveRedEyeOutlinedIcon sx={sx} className={'icon ' + name}>{children}</RemoveRedEyeOutlinedIcon>
            )
        case 'quick-view':
            return (
                <ZoomInOutlinedIcon sx={sx} className={'icon ' + name}>{children}</ZoomInOutlinedIcon>
            )
        case 'arrow-right':
            return (
                <ArrowForwardIosIcon sx={sx} className={'icon ' + name}>{children}</ArrowForwardIosIcon>
            )
        case 'arrow-left':
            return (
                <ArrowBackIosIcon sx={sx} className={'icon ' + name}>{children}</ArrowBackIosIcon>
            )   
        case 'add-cart':
            return (
                <AddShoppingCartIcon sx={sx} className={'icon ' + name}>{children}</AddShoppingCartIcon>
            )
        case 'arrow-up':
            return (
                <KeyboardArrowUpIcon sx={sx} className={'icon ' + name}>{children}</KeyboardArrowUpIcon>
            )
        case 'search':
            return (
                <SearchIcon sx={sx} className={'icon ' + name}>{children}</SearchIcon>
            )
        case 'menu':
            return (
                <MenuIcon sx={sx} className={'icon ' + name}>{children}</MenuIcon>
            )
        case 'arrow-down':
            return (
                <ExpandMoreIcon sx={sx} className={'icon ' + name}>{children}</ExpandMoreIcon>
            )
    }
    return(
        <></>
    )
}
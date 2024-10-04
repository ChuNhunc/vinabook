import { Box } from "@mui/material"
import { FixedSocialMedia } from "../../molecules/FixedSocialMedia"
import { Icon } from "../../atoms/icon"
import { useState } from "react"

export const ListFixedSocialMedia = () => {
    const [display, setDisplay] = useState(false);

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }
    return (
        <>
            <Box 
                sx={{
                    top: '100px',
                    position: 'fixed',
                    right: '0',
                    width: '40px',
                    height: '40px',
                    zIndex: '102'
                }}
            >
                <FixedSocialMedia src='zalo.png'/>
                <FixedSocialMedia src='messenger.jfif'/>
                <FixedSocialMedia src='tiktok.png'/>
                <Box
                    sx={{
                        display: display ? 'block' : 'none',
                        marginTop: '5px', 
                        border: '1px solid #ccc', 
                        padding: '1px 4px 0px 4px', 
                        backgroundColor: 'white',
                        borderRight: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    <Icon name="arrow-up"/>
                </Box>
            </Box>
        </>
    )
}
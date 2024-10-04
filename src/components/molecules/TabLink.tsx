import { Box } from "@mui/material"
import { useContext, useState } from "react"
import styled from "@emotion/styled";
import { VinaBooksContext } from "../../context/VinaBooksContext";
import { BoxContainer } from "../atoms/BoxContainer";
import { Text } from "../atoms/typography";


const Button = styled('button')((theme) => ({
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    '&.active': {
        color: '#EC8000'
    },
}))

export const TabLink = () => {
    const context = useContext(VinaBooksContext);
    const arr = Array(context?.tabProductStore.product.length).fill(false);
    arr[0] = true;
    const [active, setActive] = useState(arr);
    return (
        <>
            <BoxContainer className= 'tab-link'>
                {context?.tabProductStore.product.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            className={active[index] ? 'active':''}
                            onClick={() => {
                                let newActive = Array(context?.tabProductStore.product.length).fill(false);
                                console.log(newActive);
                                newActive = active.map((item, idx) => {
                                    if(idx === index) return item = true;
                                    return item = false;
                                }) 
                                console.log(newActive);
                                setActive(newActive);
                            }}
                        >
                            <Text
                                sx={(theme)=>({
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '14px',
                                    }
                                })}
                            >{item.name}</Text>
                        </Button>
                    )
                })}
            </BoxContainer>
        </>
    )
}
import { Input, TextField } from "@mui/material"
import React, { useState } from "react"
import { set } from "mobx";
import styled from "@emotion/styled";

interface AmountInputFormProps {
    onAmountChange: (amount: number) => void;
}

const Button = styled('button')({
    width: '50px',
    height: '50px',
    border: 'none',
})

export const AmountInputForm: React.FC<AmountInputFormProps> = ({ onAmountChange }) => {
    const [number, setNumber] = useState(1);
    const handleIncrease = () => {
        setNumber(number + 1);
        onAmountChange(number+1);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setNumber(newValue);
        onAmountChange(newValue);
        console.log(newValue);
    };

    const handleDecrease = () => {
        if(number > 1) {
            console.log(number);
            setNumber(number - 1);
            onAmountChange(number-1);
        }
    }
    return (
        <>
            <Button onClick={handleIncrease}>
                +
            </Button>
            <Input type="number" 
                sx={{
                    width: '50px',
                    height: '50px',
                    border: 'none',
                    borderBottom: 'none',
                    textAlign: 'center',
                    '&:hover': {
                        outline: 'none',
                    },
                    '&:focus': {
                        outline: 'none',
                    },
                }}
                defaultValue={1}
                value={number}
                onChange={handleInputChange}
            />
            <Button onClick={handleDecrease}>-</Button>
        </>
    )
}
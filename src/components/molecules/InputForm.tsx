import { flow } from "mobx"
import { InputText } from "../atoms/input"
import {styled} from "@mui/material/styles"
import { Box, TextField } from "@mui/material"

type SearchBar = {
    textButton?: string
}

const ButtonSearch = styled('button') ({
    position: 'absolute',
    top: '0',
    right: '0',
    width:'20%', 
    height:'40px', 
    backgroundColor: '#111111',
    borderRadius: '0 5px 5px 0',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
})

const ButtonApply = styled('button') (({theme})=>({
    width:'20%', 
    height:'40px', 
    borderRadius: '5px',
    border: 'none',
    color: '#ec8000',
    marginLeft: '30px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        width: '40%',
        float: 'right',
        margin: '0',
    }
}))
export const SearchBar = () => {
    return (
        <>
            <InputText/>
            <ButtonSearch>Tìm kiếm</ButtonSearch>
        </>
    )
}

export const InputForm = () => {
    return (
        <>
            <TextField size="small"
                sx={(theme)=> ({
                    width: '70%',
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ccc',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ccc',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ccc',
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'transparent', // Loại bỏ màu nền khi focus
                        },
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '54%',
                        float: 'left',
                    }
                })}
                placeholder="Nhập email"
            ></TextField>
            <ButtonApply>ĐĂNG KÝ NGAY</ButtonApply>
        </>
    )
}
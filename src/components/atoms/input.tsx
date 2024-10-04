import { SxProps, Theme } from "@mui/material";
import TextField  from "@mui/material/TextField";

type InputProps = {
    sx?: SxProps<Theme>
}

export const InputText = ({sx}: InputProps) => {
    return (
        <>
            <TextField size="small"sx={{
                width: '100%',
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
                ...sx,
            }}></TextField>
        </>
    )
}
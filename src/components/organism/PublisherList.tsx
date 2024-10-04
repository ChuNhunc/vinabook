import { List, Typography } from "@mui/material"
import { ListPublisherImage } from "../molecules/ListPublisherImage"
import { CategoryTitle, Text, TextBold } from "../atoms/typography"
import theme from "../../theme"

export const PublisherList = () => {
    return (
        <>
            <Typography 
                sx={{
                    fontWeight: '400',
                    fontSize: "20px",
                    color: theme.palette.primary.text,
                    marginBottom: '30px',
                }}>Nhà phát hành</Typography>
            <ListPublisherImage/>
        </>
    )
}
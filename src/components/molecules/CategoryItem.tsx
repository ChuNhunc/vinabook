import { Box, List, ListItem, SxProps, Theme } from "@mui/material"
import { Link, Text } from "../atoms/typography";
import { ReactNode } from "react";
import { ChildCare } from "@mui/icons-material";
import { Icon } from "../atoms/icon";

interface ListLinkProps {
    sx?: object;
    text: string;
    children?: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: ()=> void;
}


export const CategoriesItem = ({ sx, text, children, onMouseEnter, onMouseLeave , onClick}: ListLinkProps) => {
    return (
        <>
            <ListItem
                sx={{
                    '&.MuiListItem-root': {
                        padding: '0',
                    },
                    width: '100%',
                    ...sx,
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    width: '240px',
                    '&:hover, &:hover .sub-nav': {
                        '& .box-icon': {
                            backgroundColor: "#ccc"
                        }
                    }
                }}>
                    <Text sx={{
                        fontSize: "15px",
                        fontWeight: '200',
                    }}>{text}</Text>
                    <Box 
                        sx={(theme)=> ({ 
                            width: '35px', 
                            height: '35px',
                            [theme.breakpoints.down('md')]: {
                                display: 'none',
                            }
                        })} className='box-icon'>
                        <Icon name="arrow-right" sx={{
                            fontSize: "16px",
                            marginLeft: "10px",
                            marginTop: "10px",
                            backgroundColor: "transparent",
                        }}></Icon>
                    </Box>
                </Box>
                {children}
            </ListItem>
        </>
    )
}

export const SubCategoryItem = ({text}: ListLinkProps) => {
    return (
        <>
            <ListItem
                sx={{
                    '&.MuiListItem-root': {
                        padding: '0',
                    },
                    // borderTop: '1px solid #ccc',
                    // borderBottom: '1px solid #ccc',
                }}
            >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    height: '35px',
                    width: '250px',
                }}>
                    <Text sx={{
                        fontSize: "15px",
                        fontWeight: '200',
                    }}>{text}</Text>
                </Box>
            </ListItem>
        </>
    )
}
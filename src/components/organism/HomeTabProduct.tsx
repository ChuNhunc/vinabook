import { Box } from "@mui/material"
import { TabLink } from "../molecules/TabLink"
import { TabBooks } from "../molecules/TabBooks"
import { useContext } from "react";
import { VinaBooksContext } from "../../context/VinaBooksContext";

export const HomeTabProduct = () => {
    const context = useContext(VinaBooksContext);
    return (
        <>
            <Box>
                <TabLink/>
                {context? <TabBooks {...context.tabProductStore.product[0]}/> : null}
            </Box>
        </>
    )
}
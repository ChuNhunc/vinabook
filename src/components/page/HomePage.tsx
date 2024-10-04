import { Container } from "../atoms/container"
import { ContentLeft } from "../organism/ContentLeft"
import { ContentRight } from "../organism/ContentRight"
import { MainTemplate } from "../template/MainTemplate"
import { ListFixedSocialMedia } from "../organism/BookDetail/ListFixedSocialMedia"
import { observer } from "mobx-react-lite"
import { BoxContainer } from "../atoms/BoxContainer"
import { PublisherList } from "../organism/PublisherList"
import theme from "../../theme"

export const HomePage = observer(() => {
    return (
        <>
            <MainTemplate sx={{backgroundColor: theme.palette.secondary.background,}}>
                <Container sx={{marginTop: '25px'}}>
                    {/* <ListFixedSocialMedia/> */}
                    <ContentRight/>
                    <ContentLeft/>
                </Container>
            </MainTemplate>
        </>
    )
})
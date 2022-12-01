import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import BookCardView from "../components/BookCardView"
import AuthorCarousel from "../components/AuthorCarousel"


const Home = () => {
    return (
        <>
            <title>Anasayfa</title>
            <Layout>
                <Carousel />
                <BookCardView />
                <AuthorCarousel />
            </Layout>
        </>
    )
}

export default Home
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import BookCardView from "../components/BookCardView"
import AuthorCarousel from "../components/AuthorCarousel"
import Sidebar from "../components/Sidebar"


const Home = () => {
    return (
        <>
            <title>Anasayfa</title>
            <Layout>
                <Sidebar />
                <Carousel />
                <BookCardView />
                <AuthorCarousel />
            </Layout>
        </>
    )
}

export default Home
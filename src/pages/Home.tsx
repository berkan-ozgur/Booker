import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import BookCardView from "../components/BookCardView"


const Home = () => {
    return (
        <>
            <title>Anasayfa</title>
            <Layout>
                <Carousel />
                <BookCardView />
            </Layout>
        </>
    )
}

export default Home
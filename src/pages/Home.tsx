import Layout from "../components/Layout"
import Card from '../components/Card'
import Carousel from "../components/Carousel"


const Home = () => {
    return (
        <>
            <title>Anasayfa</title>
            <Layout>
                <Carousel />
                <Card />
            </Layout>
        </>
    )
}

export default Home
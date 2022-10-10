import CarouselImage from "../assets/images/carousel.png"
import CarouselImage2 from "../assets/images/carousel2.png"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    1024: { items: 1 }
};

const items = [
    <div className="carousel-items">
        <img src={CarouselImage} />
    </div>,
    <div className="carousel-items">
        <img src={CarouselImage2} />
    </div>,
    <div className="carousel-items">
        <img src={CarouselImage} />
    </div>,
    <div className="carousel-items">
        <img src={CarouselImage2} />
    </div>,
]

const Carousel = () => {
    return (
        <AliceCarousel
            items={items}
            responsive={responsive}
            disableButtonsControls
            mouseTracking
            animationType='fadeout'
            infinite
            animationDuration={2000}
            autoPlay
            autoHeight
            autoWidth
        />
    )
}

export default Carousel
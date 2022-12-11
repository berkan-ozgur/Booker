import { Avatar } from "primereact";
import AvatarImage from "../assets/images/avatar-example.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card2 from "./Card2";

const BookCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1317 },
      items: 6,
    },
    minidesktop: {
      breakpoint: { max: 1317, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  let bookName = 'Bilinmeyen Bir Kadının Mektubu'
  return (
    <>
      <div>
        <div className="author-container-header">Benzer Ürünler</div>
        <div className="author-container">
          <Carousel
            responsive={responsive}
            draggable={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
               <Card2/>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default BookCarousel;

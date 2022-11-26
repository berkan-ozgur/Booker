import { Avatar } from "primereact";
import AvatarImage from "../assets/images/avatar-example.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AuthorCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div>
            <div className="author-container-header">
                Ayın Yazarları
            </div>
            <div className="author-container">
                <Carousel
                    responsive={responsive}
                    draggable={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Avatar style={{ height: "100px", width: "100px" }} image={AvatarImage} size={"large"} shape={"circle"} />
                        </div>
                        <div className="col-12">
                            Berkan Özgür
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default AuthorCarousel;
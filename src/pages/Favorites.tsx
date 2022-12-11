import Layout from "../components/Layout"
import bookImage from "../assets/images/bookImage.png"

const Favorites = () => {
    return (
        <>
            <title>Favoriler</title>
            <Layout>
                <h3>Favorilerim</h3>
                <hr />
                <div className="favorites">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 justify-content-center d-flex">
                            <div className="text-center">
                                <div className="favorites-card">
                                    <img className="img-fluid" draggable={false} src={bookImage} />
                                    <h6>Bilinmeyen Bir Kadının Mektubu</h6>
                                    <p style={{ marginBottom: 0 }}>Stefan Zweig</p>
                                    <div className="price" style={{ marginTop: 0 }}>199.99₺</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <i className="pi pi-shopping-cart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                        <div className="col-6">
                                            <i className="pi pi-heart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 justify-content-center d-flex">
                            <div className="text-center">
                                <div className="favorites-card">
                                    <img className="img-fluid" draggable={false} src={bookImage} />
                                    <h6>Bilinmeyen Bir Kadının Mektubu</h6>
                                    <p style={{ marginBottom: 0 }}>Stefan Zweig</p>
                                    <div className="price" style={{ marginTop: 0 }}>199.99₺</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <i className="pi pi-shopping-cart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                        <div className="col-6">
                                            <i className="pi pi-heart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 justify-content-center d-flex">
                            <div className="text-center">
                                <div className="favorites-card">
                                    <img className="img-fluid" draggable={false} src={bookImage} />
                                    <h6>Bilinmeyen Bir Kadının Mektubu</h6>
                                    <p style={{ marginBottom: 0 }}>Stefan Zweig</p>
                                    <div className="price" style={{ marginTop: 0 }}>199.99₺</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <i className="pi pi-shopping-cart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                        <div className="col-6">
                                            <i className="pi pi-heart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 justify-content-center d-flex">
                            <div className="text-center">
                                <div className="favorites-card">
                                    <img className="img-fluid" draggable={false} src={bookImage} />
                                    <h6>Bilinmeyen Bir Kadının Mektubu</h6>
                                    <p style={{ marginBottom: 0 }}>Stefan Zweig</p>
                                    <div className="price" style={{ marginTop: 0 }}>199.99₺</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <i className="pi pi-shopping-cart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                        <div className="col-6">
                                            <i className="pi pi-heart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 justify-content-center d-flex">
                            <div className="text-center">
                                <div className="favorites-card">
                                    <img className="img-fluid" draggable={false} src={bookImage} />
                                    <h6>Bilinmeyen Bir Kadının Mektubu</h6>
                                    <p style={{ marginBottom: 0 }}>Stefan Zweig</p>
                                    <div className="price" style={{ marginTop: 0 }}>199.99₺</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <i className="pi pi-shopping-cart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                        <div className="col-6">
                                            <i className="pi pi-heart" style={{ fontSize: "1.4em" }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Favorites
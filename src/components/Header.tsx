import { D } from "chart.js/dist/chunks/helpers.core";
import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import AuthService from "../services/authServices";


const Header = () => {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div className="super_container">
            <header className="header">
                <div className="top_bar">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-row headerClass">
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon">
                                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png" alt="" />
                                    </div>
                                    +91 9823 132 111
                                </div>
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon ">
                                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png" alt="" />
                                    </div>
                                    <Link to="mailto:fastsales@gmail.com">contact@booker.com</Link>
                                </div>
                                {
                                    currentUser.name ? (
                                       <div className="loginName d-flex justify-content-end">
                                         <h4 style={{}}>
                                            Hoş geldiniz,  
                                        </h4>
                                        <h4 style={{marginLeft: 10}}>
                                        {currentUser.name}
                                        </h4>
                                        <div className="logout">
                                        <button onClick={() => {
                                            AuthService.logout();
                                            window.location.replace('/');
                                        }
                                        }>
                                            <p style={{color: 'red'}}>Çıkış Yap</p>
                                        </button>
                                        </div>
                                       </div>
                                    ) : (
                                        <div className="top_bar_content ml-auto d-flex justify-content-end" style={{ flex: 1 }}>
                                    <div className="top_bar_user">
                                        <div>
                                            <Link to="/register">
                                                <div className="user_icon">
                                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg" alt="" />
                                                </div>
                                                <span>Kayıt Ol</span>{" "}
                                            </Link>
                                        </div>
                                        <div className="user_icon"></div>
                                        <Link to="/login">
                                            <i className="pi pi-sign-in"></i>
                                            <span>Giriş Yap</span>
                                        </Link>
                                        <div></div>
                                    </div>
                                </div> 
                                    )
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_main">
                    <div className="container">
                        <div className="row">
                            <div style={{ height: 100 }} className="col-lg-2 col-md-2 col-sm-6 ">
                                <div className="logo_container">
                                    <div className="logo">
                                        <Link to="/" style={{ color: "#143F6B" }}>
                                            <img src={logo} width={150} className="mt-4"></img>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="padding_error col-lg-8 col-md-8 text-lg-left text-right">
                                <div className="header_search">
                                    <div className="header_search_content">
                                        <div className="header_search_form_container">
                                            <form action="#" className="header_search_form">
                                                {" "}
                                                <input
                                                    type="search"
                                                    required={true}
                                                    className="header_search_input"
                                                    placeholder="Hangi ürünü aramıştınız?"
                                                />
                                                <button
                                                    type="submit"
                                                    className="header_search_button "
                                                    value="Submit"
                                                    style={{ background: "#fa6207" }}
                                                >
                                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6  text-lg-left text-right">
                                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                    <div className="d-flex flex-row align-items-center justify-content-end">
                                        <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                                            <Link to="/favorites">
                                                <div className="wishlist_icon">
                                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt="" />
                                                </div>
                                            </Link>
                                            <div className="wishlist_content">
                                                <Link to="/favorites">
                                                    <div className="wishlist_text"><a href="#" style={{ color: "black" }}>Favoriler</a></div>
                                                    <div className="wishlist_count">1</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div className="cart_icon">
                                            {" "}
                                            <Link to="/cart">
                                                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt="" />
                                            </Link>
                                            <Link to="/cart">
                                                <div className="cart_count">
                                                    <span>0</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <Link to="/cart">
                                            <div className="cart_content">
                                                <div className="cart_text">Sepet</div>
                                                <div className="cart_price">0.00₺</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 col-md-8   text-lg-left text-right">
                                <div className="header_search2">
                                    <div className="header_search_content">
                                        <div className="header_search_form_container2">
                                            <form action="#" className="header_search_form clearfix">
                                                {" "}
                                                <input
                                                    type="search"
                                                    required={true}
                                                    className="header_search_input"
                                                    placeholder="Hangi ürünü aramıştınız?"
                                                />
                                                <button
                                                    type="submit"
                                                    className="header_search_button"
                                                    value="Submit"
                                                    style={{ background: "#fa6207" }}
                                                >
                                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <hr />
        </div>
    );
};

export default Header;
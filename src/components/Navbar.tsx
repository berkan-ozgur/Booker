import { Link } from "react-router-dom";

const CategoryNavbar = () => {
    return (
        <div className="wrapper">
            <div className="nav">
                <ul className="nav-links container">
                    <li>
                        <a href="#">Tüm Kitaplar</a>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <ul className="mega-links">
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="#">Yayıncılar</a>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <ul className="mega-links">
                                        <li>
                                            <Link to={"/category/:undefined"}>
                                                <a href="#">deneme</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/category/:undefined"}>
                                                <a href="#">deneme2</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">Yazarlar</a>
                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <ul className="mega-links">
                                        <li>
                                            <Link to={"/category/:undefined"}>
                                                <a href="#">Ahmet</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/category/:undefined"}>
                                                <a href="#">Emre</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/category/:undefined"}>
                                                <a href="#">Berkan</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryNavbar;
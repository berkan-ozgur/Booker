import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="footer-gray">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Kurumsal</h3>
                            <ul>
                                <li><Link to="/aboutus">Hakkımızda</Link></li>
                                <li><Link to="/">Marka Menşeileri</Link></li>
                                <li><Link to="/contact">İletişim</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>İletişim</h3>
                            <ul>
                                <li><Link to="/">İletişim Formu</Link></li>
                                <li><Link to="/">Havale Bildirimi</Link></li>
                                <li><Link to="/register">Yeni Üyelik</Link></li>
                                <li><Link to="/login">Üye Girişi</Link></li>
                                <li><Link to="/">Şifremi Unuttum</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Müşteri Hizmetleri</h3>
                            <ul>
                                <li><Link to="/frequentlyasked">Sıkça Sorulan Sorular</Link></li>
                                <li><Link to="/">İndirimdekiler</Link></li>
                                <li><Link to="/">Yeni Ürünler</Link></li>
                                <li><Link to="/">Markalar</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item text">
                            <h3>Booker Website</h3>
                            <ul style={{ opacity: "0.6" }}>
                                <li>Müşteri Hizmetleri</li>
                                <li>0 242 222 10 70</li>
                            </ul>
                        </div>
                        <div className="col item social mt-4">
                            <Link to="/">
                                <i className="pi pi-facebook" />
                            </Link>
                            <Link to="/">
                                <i className="pi pi-instagram" />
                            </Link>
                        </div>
                    </div>
                    <h4 className="copyright">Berkan, Emre, Sezer © {year}</h4>
                </div>
            </footer>
        </div>
    )
}

export default Footer
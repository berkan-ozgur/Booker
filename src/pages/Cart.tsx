import { Button } from "primereact"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const Cart = () => {
    return (
        <>
            <title>Sepet</title>
            <Layout>
                <div className="shop-details">
                    <i className="pi pi-shopping-cart" style={{ fontSize: '2em' }}></i>
                    <h2>Sepetin şu an boş</h2>
                    <p className="info">Sepetini doldurmak için aşağıdaki ürünleri incelemeye başlayabilirsin.</p>
                    <div className="row">
                        <div className="col-12">
                            <text>Sepete eklenen kitaplar için bir card tasarımı düşünülecek</text>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-end col-12">
                            <text>Ara Toplam:</text>
                            <text> ₺ 48,95</text>
                        </div>
                    </div>
                    <div className="text-end col-12">
                        <text style={{ fontSize: 20, fontWeight: 600, color: '#143f6b' }}>Toplam: ₺ 48,95</text>
                    </div>
                    <div className="row">
                        <div className="cart-button d-flex justify-content-start col-6">
                            <Link to="/">
                                <Button>Alışverişe Devam Et</Button>
                            </Link>
                        </div>
                        <div className="cart-button d-flex justify-content-end col-6">
                            <Button>Satın Al</Button>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Cart
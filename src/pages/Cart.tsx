import { Button } from "primereact"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import bookImage from "../assets/images/bookImage.png";
import { useEffect, useState } from "react";

const Cart = () => {
    const price = 48.95;
    const [counter, setCounter] = useState(1);
    const [newPrice, setNewPrice] = useState(price);
    const incrementCounter = () => {
        setCounter(counter + 1);
    }
    let decrementCounter = () => {
        setCounter(counter - 1);
    }
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    useEffect(() => {
        setNewPrice(price * counter);
    }, [counter]);
    return (
        <>
            <title>Sepet</title>
            <Layout>
                <div className="shop-details">
                    <i className="pi pi-shopping-cart" style={{ fontSize: '2em' }}></i>
                    <h2>Sepetin şu an boş</h2>
                    <p className="info">Sepetini doldurmak için aşağıdaki ürünleri incelemeye başlayabilirsin.</p>
                    <div className="shopping-cart-header row">
                        <div className="col-2">
                            Ürün
                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-2">
                            Miktar
                        </div>
                        <div className="col-2">
                            Tedarik Süresi
                        </div>
                        <div className="col-2">
                            Birim Fiyatı
                        </div>
                        <div className="col-2">
                            Toplam
                        </div>
                    </div>
                    <div className="shopping-cart-detail row">
                        <div className="col-2">
                            <img src={bookImage} style={{ maxHeight: '150px' }} className="no-draggable img-fluid" alt="" />
                        </div>
                        <div className="col-2">
                            Bilinmeyen Bir Kadının Mektubu
                        </div>
                        <div className="col-2">
                            <div className="col-12">
                                <Button className="shopping-card-buttons" onClick={incrementCounter}>
                                    +
                                </Button>
                            </div>
                            <div className="col-12">
                                {counter}
                            </div>
                            <div className="col-12">
                                <Button className="shopping-card-buttons" onClick={decrementCounter}>
                                    -
                                </Button>
                            </div>
                        </div>
                        <div className="col-2" style={{ color: 'red' }}>
                            24 Saatte Kargoda
                        </div>
                        <div className="col-2" style={{ color: '#777' }}>
                            {price.toLocaleString(undefined, { maximumFractionDigits: 2 })}₺
                        </div>
                        <div className="col-2">
                            {newPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}₺
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-end col-12">
                            Ara Toplam
                            <text> {newPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}₺</text>
                        </div>
                    </div>
                    <div className="text-end col-12">
                        <text style={{ fontSize: 20, fontWeight: 600, color: '#143f6b' }}>Toplam: {newPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}₺</text>
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
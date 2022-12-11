import Layout from "../components/Layout";
import { Image } from "primereact/image";
import BookImage from "../assets/images/bookImage.png";
import {
  Button,
  Card,
  Column,
  DataTable,
  Dropdown,
  Rating,
  SplitButton,
} from "primereact";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthorCarousel from "../components/AuthorCarousel";
import BookCarousel from "../components/BookCarousel";

const BookDetail = () => {
  let ratingNumber = 12;

  const items = Array.from({ length: 10 }).map((_, i) => ({
    label: `${i}`,
    value: i,
  }));
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const onItemChange = (e: { value: any }) => {
    setSelectedItem(e.value);
  };
  let BookName = "Bilinmeyen Bir Kadının Mektubu";
  return (
    <>
      <title>{BookName}</title>
      <Layout>
        <div className="card-detail row">
          <div className="col-lg-5 col-sm-12 book-image-detail">
            <Image src={BookImage} alt="Image" width="250" preview />
          </div>
          <div className="col-lg-5 col-sm-12 explanation">
            <h2> Bilinmeyen Bir Kadının Mektubu </h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <h4> Stephen Zweig </h4>
              </li>
              <li className="list-inline-item">
                <h2>|</h2>
              </li>
              <li className="list-inline-item">
                <h4> Kültür Yayınları </h4>
              </li>
            </ul>
            <p className="book-info">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
            <div className="detail-price">199.99₺</div>
            <div className="row detail-row">
              <div className="col-4">
                <Dropdown
                  className="detail-buttons"
                  placeholder="Adet"
                  value={selectedItem}
                  options={items}
                  onChange={onItemChange}
                  virtualScrollerOptions={{ itemSize: 38 }}
                />
              </div>
              <div className="col-4">
                {" "}
                <Button
                  className="detail-buttons"
                  label="Sepete Ekle"
                  icon="pi pi-shopping-cart"
                />
              </div>
              <div className="col-4">
                <Button className="detail-buttons" icon="pi pi-heart" />
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="col-12">
              <Card className="rating-card">
                <h3>Ürün Değerlendirmeleri</h3>
                <Rating
                  className="rating"
                  value={3.5}
                  readOnly
                  stars={5}
                  cancel={false}
                />
                <Link to="#" className="rating-card-links">
                  ({ratingNumber}) Ürün Değerelendirmeleri{" "}
                </Link>{" "}
                <br />
                <Link to="#" className="rating-card-links">
                  ({ratingNumber}) Mağaza Soruları{" "}
                </Link>
              </Card>
              <Card className="rating-card">
                <h3>Ürün Kampanyaları</h3> <hr /> <br />
                <h4>75 TL üzeri kargo bedava</h4>
              </Card>
              <Card className="store-card">
                <h3>Indigo Kitap </h3> <hr /> <br />
                <div>
                  <h4>
                    <Link to="#" className="store-card-links">
                      <i className="pi pi-home" /> Mağazayı Gör
                      <i className="pi pi-angle-right" />
                    </Link>
                    <hr />
                    <Link to="#" className="store-card-links">
                      Ürün Soruları ({ratingNumber})
                      <i className="pi pi-angle-right" />
                    </Link>
                  </h4>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="row ">
          <h2 className="book-feature">Kitap Özellikleri</h2>
          <div className="col-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">Kitap Adı:</li>
              <li className="list-group-item">Yazar: </li>
              <li className="list-group-item">Yayınevi:</li>
              <li className="list-group-item">Sayfa Sayısı:</li>
              <li className="list-group-item">Ebat:</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">Bilinyen Bir Kadının Mektubu</li>
              <li className="list-group-item">Stephen Zweig</li>
              <li className="list-group-item">Kültür Yayınları</li>
              <li className="list-group-item">62</li>
              <li className="list-group-item">13,5 x 21</li>
            </ul>
          </div>
        </div>
        <BookCarousel />
      </Layout>
    </>
  );
};
export default BookDetail;

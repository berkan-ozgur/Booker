import Layout from "../components/Layout";
import { Image } from "primereact/image";
import BookImage from "../assets/images/bookImage.png";
import { Button, Dropdown, SplitButton } from "primereact";
import { useState } from "react";

const BookDetail = () => {
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
          <div className="col-lg-5 col-sm-12">
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
            <div className="row">
              <div className="col-4">
                <Dropdown className="detail-buttons"
                  value={selectedItem}
                  options={items}
                  onChange={onItemChange}
                  virtualScrollerOptions={{ itemSize: 38 }}
                />
              </div>
              <div className="col-4">
                {" "}
                <Button className="detail-buttons" label="Sepete Ekle" icon="pi pi-shopping-cart" />
              </div>
              <div className="col-4" >
                <Button className="detail-buttons" icon="pi pi-heart" />
              </div>
            </div>
          </div>
          <div className="col-2">Sepete ekle falan filan</div>
        </div>
      </Layout>
    </>
  );
};
export default BookDetail;

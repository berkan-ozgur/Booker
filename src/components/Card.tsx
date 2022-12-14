import bookImage from "../assets/images/bookImage.png";
import bookImage2 from "../assets/images/bookImage2.jpg";
import bookImage3 from "../assets/images/bookImage3.jpg";
import bookImage4 from "../assets/images/bookImage4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
// https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png

const BookCard = () => {
  const [favorite, setFavorite] = useState(false);
  console.log({ favorite });

  return (
    <div className="row wrapper">
      <div className="col-lg-3 col-md-6 card-column">
        <Link to='/book-detail'>
        <div className="products-card">
          <div className="card">
            <img src={bookImage} className="book-image" alt="" />
            <div className="card-container">
              <h2 className="book-title">Book Name</h2>
              <p className="book-description">Book description</p>
              <div className="heartIcon">
                <i
                  className="pi pi-heart"
                  onClick={() =>
                    favorite == false ? setFavorite(true) : setFavorite(false)
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="price">199.99₺</div>
          <div className="card-button">
            <button className="btn btn-primary" type="button">
              Sepete Ekle
            </button>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 card-column">
        <div className="products-card">
          <div className="card">
            <img src={bookImage2} className="book-image" alt="" />
            <div className="card-container">
              <h2 className="book-title">Book Name</h2>
              <p className="book-description">Book description</p>
              <div className="heartIcon">
                <i
                  className="pi pi-heart"
                  onClick={() =>
                    favorite == false ? setFavorite(true) : setFavorite(false)
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="price">199.99₺</div>
          <div className="card-button">
            <button className="btn btn-primary" type="button">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 card-column">
        {" "}
        <div className="products-card">
          <div className="card">
            <img src={bookImage3} className="book-image" alt="" />
            <div className="card-container">
              <h2 className="book-title">Book Name</h2>
              <p className="book-description">Book description</p>
              <div className="heartIcon">
                <i className="pi pi-heart"></i>
              </div>
            </div>
          </div>
          <div className="price">199.99₺</div>
          <div className="card-button">
            <button className="btn btn-primary" type="button">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 card-column">
        <div className="products-card">
          <div className="card">
            <img src={bookImage4} className="book-image" alt="" />
            <div className="card-container">
              <h2 className="book-title">Book Name</h2>
              <p className="book-description">Book description</p>
              <div className="heartIcon">
                <i className="pi pi-heart"></i>
              </div>
            </div>
          </div>
          <div className="price">199.99₺</div>
          <div className="card-button">
            <button className="btn btn-primary" type="button">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookCard;

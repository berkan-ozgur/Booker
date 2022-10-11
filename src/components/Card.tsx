import bookImage from "../assets/images/bookImage.png";
// https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png


const BookCard = () => {
  return (
    <div className="wrapper">
      <div className="products-card">
        <div className="card">
          <img src={bookImage} className="book-image" alt="" />
          <div className="card-container">
            <h2 className="book-title">Book Name</h2>
            <p className="book-description">Book description</p>
            <div className="heartIcon text-center">
              <i className="pi pi-heart"></i>
            </div>
          </div>
        </div>
        <div className="price">199.99₺</div>
        <button className="btn btn-primary" type="button">
          Add To Card
        </button>
      </div>
      <div className="products-card">
        <div className="card">
          <img src={bookImage} className="book-image" alt="" />
          <div className="card-container">
            <h2 className="book-title">Book Name</h2>
            <p className="book-description">Book description</p>
            <div className="heartIcon text-center">
              <i className="pi pi-heart"></i>
            </div>
          </div>
        </div>
        <div className="price">199.99₺</div>
        <button className="btn btn-primary" type="button">
          Add To Card
        </button>
      </div>
      <div className="products-card">
        <div className="card">
          <img src={bookImage} className="book-image" alt="" />
          <div className="card-container">
            <h2 className="book-title">Book Name</h2>
            <p className="book-description">Book description</p>
            <div className="heartIcon text-center">
              <i className="pi pi-heart"></i>
            </div>
          </div>
        </div>
        <div className="price">199.99₺</div>
        <button className="btn btn-primary" type="button">
          Add To Card
        </button>
      </div>
      <div className="products-card">
        <div className="card">
          <img src={bookImage} className="book-image" alt="" />
          <div className="card-container">
            <h2 className="book-title">Book Name</h2>
            <p className="book-description">Book description</p>
            <div className="heartIcon text-center">
              <i className="pi pi-heart"></i>
            </div>
          </div>
        </div>
        <div className="price">199.99₺</div>
        <button className="btn btn-primary" type="button">
          Add To Card
        </button>
      </div>
    </div>
  );
};
export default BookCard;

import bookImage from "../assets/images/bookImage.png";
import foto from "../assets/images/foto.png";

const BookCard = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={bookImage} className="book-image" alt="" />
        <div className="card-container">
          <h1 className="book-title">Book Name</h1>
          <p className="book-description">Book description</p>
          <button type="button" className="btn btn-primary">
            Add To Cart
          </button>
          <button type="button" className="btn btn-primary">
            <i className="pi pi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookCard;

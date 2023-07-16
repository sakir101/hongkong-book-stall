import { IBook } from "../../types/globalTypes";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { title, author, genre, publicationDate, img } = book;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} className="w-3/4" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title text-xl">
          <span>Author:</span>
          <span className="text-blue-800">{author}</span>
        </h2>
        <h2 className="card-title text-sm">
          <span>Genre:</span>
          <span className="text-red-800">{genre}</span>
        </h2>
        <h2 className="card-title text-sm">
          <span>Publication Date:</span>
          <span>{publicationDate}</span>
        </h2>

        <div className="card-actions justify-center mt-6">
          <div className="badge  bg-blue-700 text-white p-3">Edit</div>
          <div className="badge bg-red-700 text-white p-3">Remove</div>
          <div className="badge bg-lime-400  p-3">Add to Wishlist</div>
        </div>
      </div>
    </div>
  );
}

import {
  useAddBookToBookListMutation,
  useAddBookToWishListMutation,
  useDeleteBookDataMutation,
} from "../../redux/features/book/bookApi";
import { IBook } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiSolidCommentAdd } from "react-icons/bi";
import { TbJewishStarFilled } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { title, author, genre, publicationDate, img, _id } = book;
  const [deleteBook, { isError, isSuccess }] = useDeleteBookDataMutation();
  const [addBook, { isSuccess: dataStored, isError: notStored }] =
    useAddBookToWishListMutation();
  const [
    bookToBookList,
    { isSuccess: dataStoredInBookList, isError: notStoredInBookList },
  ] = useAddBookToBookListMutation();

  const notify = (response: string) => toast(response);

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book data can not be deleted properly");
    }
    if (isSuccess) {
      notify("Book Deleted Successfully");
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (notStored) {
      notify("Sorry! Book data can not be stored properly in wish list");
    }
    if (dataStored) {
      notify("Book stored in wish list Successfully");
    }
  }, [notStored, dataStored]);

  useEffect(() => {
    if (notStoredInBookList) {
      notify("Sorry! Book data can not be stored properly in book list");
    }
    if (dataStoredInBookList) {
      notify("Book stored in book list Successfully");
    }
  }, [dataStoredInBookList, notStoredInBookList]);

  const onSubmit = (book: any) => {
    const {
      title,
      author,
      genre,
      publicationDate,
      publicationYear,
      publisherEmail,
      img,
    } = book;

    const newBook = {
      data: {
        title: title,
        author: author,
        genre: genre,
        img: img,
        publicationDate: publicationDate,
        publicationYear: publicationYear,
        publisherEmail: publisherEmail,
      },
    };

    console.log(newBook);
    addBook(newBook)
      .unwrap()
      .then((response) => {
        console.log("response:", response);
      })
      .catch((error: string) => {
        console.error("Error posting data:", error);
      });
  };

  const submitToBookList = (book: any) => {
    const {
      title,
      author,
      genre,
      publicationDate,
      publicationYear,
      publisherEmail,
      img,
    } = book;

    const newBook = {
      data: {
        title: title,
        author: author,
        genre: genre,
        img: img,
        publicationDate: publicationDate,
        publicationYear: publicationYear,
        publisherEmail: publisherEmail,
      },
    };

    console.log(newBook);
    bookToBookList(newBook)
      .unwrap()
      .then((response) => {
        console.log("response:", response);
      })
      .catch((error: string) => {
        console.error("Error posting data:", error);
      });
  };

  const handleDeleteBook = (id: any) => {
    const proceed = window.confirm(`Are you sure you want to delete`);
    if (proceed) {
      deleteBook(id)
        .unwrap()
        .then(() => {
          console.log("Book deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
        });
    } else {
      return;
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} className="w-3/4 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title text-2xl">
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
          <Link
            className="btn  bg-slate-100 border-transparent p-2 m-1"
            to={`/updateBook/${_id}`}
            title="Edit"
          >
            <AiTwotoneEdit className="text-2xl" />
          </Link>
          <button
            className="btn bg-slate-100 border-transparent p-2 m-1"
            onClick={() => handleDeleteBook(_id)}
            title="Remove"
          >
            <AiTwotoneDelete className="text-2xl" />
          </button>
          <button
            onClick={() => onSubmit(book)}
            className="btn bg-slate-100 border-transparent p-2 m-1"
            title="Wish List"
          >
            <TbJewishStarFilled className="text-2xl" />
          </button>
          <button
            onClick={() => submitToBookList(book)}
            className="btn bg-slate-100 border-transparent p-2 m-1"
            title="Book List"
          >
            <BiSolidCommentAdd className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

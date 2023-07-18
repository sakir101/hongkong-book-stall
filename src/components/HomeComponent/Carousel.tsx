import { useGetMaxRatedBookQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/globalTypes";
import Loading from "../Loading/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import "./Carousel.css";

export default function Carousel() {
  const { data, isLoading } = useGetMaxRatedBookQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <AiOutlineDoubleRight className="text-black" />,
    prevArrow: <AiOutlineDoubleLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around">
      <div className="my-0 mb-10 lg:my-auto mx-5 lg:mx-0 text-center lg:text-start">
        <h1 className="text-xl lg:text-6xl font-bold">
          Most Selling <br />
          Books <br />
          Now Available
        </h1>
        <p className="text-lg lg:text-xl text-slate-600">
          With us, you can shop online and help save <br />
          your high street at the same time
        </p>
      </div>
      {isLoading ? (
        <Loading />
      ) : data?.data.length ? (
        <Slider {...settings} className="w-40 lg:w-96 mx-auto lg:mx-0">
          {data.data.map((book: IBook, index: number) => (
            <div key={index} className="my-5">
              <p className="text-center font-semibold text-xl">{book.title}</p>
              <img src={book.img} className="mx-auto h-auto" alt="" />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

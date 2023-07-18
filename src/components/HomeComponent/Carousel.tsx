export default function Carousel() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around ">
      <div className="my-0 lg:my-auto text-center lg:text-start mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl font-bold ">
          Most Selling <br />
          Books <br />
          Now Available
        </h1>
        <p className="text-xl lg:text-xl text-slate-600">
          with us you can shop online & help save <br />
          your high street at the same time
        </p>
      </div>
      <div className="carousel w-3/4 lg:w-1/2  mx-auto lg:mx-0 p-0">
        <div id="slide1" className="carousel-item relative  w-full ">
          <img
            src="https://boideshik.com/wp-content/uploads/2021/03/nis.jpg"
            className="w-auto mx-auto h-1/2 my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/474x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg"
            className="w-auto mx-auto h-1/2 my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/736x/85/8c/18/858c184854d81b1367974218ea6c8451.jpg"
            className="w-auto mx-auto h-1/2 my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://3.bp.blogspot.com/-pl-sE2waKPk/Vx50EAKBrcI/AAAAAAAAI38/ZpyvJd7pQ5MORpy9GNXHJGNwpjLpZFVFwCLcB/s1600/Sondhabelar%2BManush%2BBy%2BSomoresh%2BMojumdar.jpg"
            className="w-auto mx-auto h-1/2 my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

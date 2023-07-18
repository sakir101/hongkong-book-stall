import cover from "../../assets/cover/cover.jpg";

export default function Background() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-around bg-gradient-to-r from-indigo-500 ... py-5 h-screen">
      <div className="my-auto text-center lg:text-start">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Find Your <br />
          Favorite Book <br />
          in Low Price
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 font-semibold">
          with us you can shop online & help save <br />
          your high street at the same time
        </p>
        <button className="btn btn-primary mt-5">Explore Now</button>
      </div>
      <div className="flex justify-center lg:block">
        <img src={cover} alt="Book" className="sm:h-48 lg:h-full" />
      </div>
    </div>
  );
}

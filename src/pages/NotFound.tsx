import notFound from "../assets/cover/notFound.jpg";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${notFound})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        color: "#fff",
      }}
    >
      NotFound
    </div>
  );
}

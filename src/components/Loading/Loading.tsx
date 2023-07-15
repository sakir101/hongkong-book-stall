import "./Loading.css";

export default function Loading() {
  return (
    <div className="loader my-10">
      <div className="loader-circle"></div>
      <span className="loader-text">Loading...</span>
    </div>
  );
}

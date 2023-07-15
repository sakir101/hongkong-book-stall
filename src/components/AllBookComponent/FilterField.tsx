export default function FilterField() {
  return (
    <div className="flex justify-center">
      <select className="select select-bordered border-2 border-stone-600 select-outline shadow-md select-sm w-auto  text-xl mx-5 h-10">
        <option disabled selected>
          Select genre
        </option>
        <option>Fiction</option>
        <option>Romance</option>
        <option>Coming-of-age</option>
        <option>Coming-of-age</option>
        <option>Modernist</option>
        <option>Adventure</option>
        <option>Fantasy</option>
        <option>Roamntic</option>
      </select>
      <select className="select select-bordered border-2 border-stone-600 select-outline shadow-md select-sm w-auto  text-xl h-10">
        <option disabled selected>
          <p>Select a year</p>
          <input
            type="text"
            className="input input-bordered input-sm w-full max-w-xs mt-2"
            placeholder="Type a year"
          />
        </option>
        {Array.from({ length: 2024 - 1900 }, (_, index) => (
          <option key={index} value={index + 1900}>
            {index + 1900}
          </option>
        ))}
      </select>
    </div>
  );
}

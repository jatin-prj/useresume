import { Link } from "react-router-dom";

export default function Builder() {
  return (
    <div className="text-center">
      <h2>Choose Templates</h2>
      <div className="flex justify-center gap-4">
        <Link to={"/templates/single-column"}>
          <button className="rounded-full bg-slate-800 text-white p-4">
            Single Column
          </button>
        </Link>
        <Link to={"/templates/multi-column"}>
          <button className="rounded-full bg-slate-800 text-white p-4">
            Multi Column
          </button>
        </Link>
      </div>
    </div>
  );
}

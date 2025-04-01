import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ReadBlog = () => {
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="mt-6">
      <div className="card bg-slate-400 text-black w-full shadow-sm py-4 px-10">
        <h2 className="card-title text-3xl">{data?.name}</h2>
        <figure>
          <img
            className="w-96 rounded-3xl mt-6"
            src={data?.picture}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <p>{data?.content}</p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary mt-4">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../PrivateRoute/Loading";

const ViewPost = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get("https://sapience-task-server.vercel.app/post").then((res) => {
      setPostData(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 mt-10">
      {postData.length == "" ? (
        <Loading />
      ) : (
        <>
          {postData?.map((postData) => (
            <div key={postData.id}>
              <div className="card bg-slate-300 w-full shadow-sm">
                <figure className="p-2">
                  <img
                    src={postData?.picture}
                    alt="img"
                    className="rounded-xl w-full h-72"
                  />
                </figure>
                <div className="card-body items-center text-black text-center">
                  <h2 className="card-title">
                    {postData.name.length < 30
                      ? `${postData.name}`
                      : `${postData.name.slice(0, 20)}...`}
                  </h2>
                  <div className="card-actions">
                    <Link to={`/read-blog/${postData._id}`}>
                      <button className="btn btn-primary mt-4">
                        Read Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ViewPost;

import { useEffect, useState } from "react";
import axios from "axios";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Loading from "../PrivateRoute/Loading";

const ManageBlog = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get("https://sapience-task-server.vercel.app/post").then((res) => {
      setPostData(res.data);
    });
  }, [postData]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sapience-task-server.vercel.app/post/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto bg-white my-10 rounded-2xl">
      <div className="text-center pb-10">
        <h1 className="text-3xl font-serif font-bold text-primary">My Blogs</h1>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto pb-10">
        <table className="table table-zebra w-full text-center">
          {/* head */}
          {postData.length == "" ? (
            <Loading />
          ) : (
            <>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Blog Image</th>
                  <th>Blog Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {postData.map((d, index) => (
                  <tr key={d._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar mx-auto">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={d.picture}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h1>{d.name}</h1>
                    </td>
                    <td>
                      <Link to={`/update-blog/${d._id}`}>
                        <button className="btn btn-outline btn-primary">
                          <RxUpdate />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(d)}
                        className="btn btn-outline btn-primary"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageBlog;

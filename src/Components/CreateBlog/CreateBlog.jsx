import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const CreateBlog = () => {
  const [productImg, setProductImg] = useState();
  const [productName, setProductName] = useState("Blog name");
  const { register, handleSubmit, reset } = useForm();

  const proImg = (e) => {
    const pImg = e.target.value;
    setProductImg(pImg);
  };
  const proName = (e) => {
    const pName = e.target.value;
    setProductName(pName);
  };

  const onSubmit = (data) => {
    // console.log(data);
    const savePost = {
      name: data.name,
      picture: data.picture,
      content: data.content,
    };
    fetch("https://sapience-task-server.vercel.app/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savePost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          window.location.reload();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Blog Created",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full">
      <div className="hero min-h-screen flex justify-center gap-10 py-10">
        <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl md:px-4">
          <div className="font-serif font-semibold text-2xl mt-8">
            <h1 className="text-3xl text-center font-serif font-bold text-primary">
              {" "}
              Create New Blog
            </h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blog Image</span>
                </label>
                <input
                  type="text"
                  {...register("picture", { required: true })}
                  onChange={proImg}
                  placeholder="blog image url"
                  className="input input-bordered bg-slate-300"
                />
              </div>

              <label className="label">
                <span className="label-text">Blog Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                onChange={proName}
                placeholder="blog name"
                name="name"
                className="input input-bordered bg-slate-300"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                type="text"
                {...register("content", { required: true })}
                placeholder="Content"
                className="textarea h-40 input-bordered bg-slate-300"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Add New Blog</button>
            </div>
          </Form>
        </div>
        <div className="card flex-shrink-0">
          <div className="mt-16 rounded-lg border bg-slate-300 dashC p-6">
            <img className="w-56 h-80" src={productImg} alt="Blog image" />
          </div>
          <div className="text-center mt-4 py-2 rounded-3xl border bg-slate-300 dashC2">
            <h1 className="font-medium text-lg w-64 p-2 text-balance">
              {productName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

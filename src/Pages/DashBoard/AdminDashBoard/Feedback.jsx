import { useForm } from "react-hook-form";
import { Form, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {
    const { register, handleSubmit } = useForm();
    const {_id} =useParams();


    const onSubmit = data => {
        const feedbackUpdate = { feedback: data.feedback }
        fetch(`https://music-academy-eta.vercel.app/classesFeedback/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackUpdate)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(feedbackUpdate);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Sent Admin Feedback',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className=" w-full">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-96">
                    <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-7">
                        <h1 className="text-center font-serif font-semibold text-2xl">FeedBack</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details of Class</span>
                                </label>
                                <textarea className="textarea textarea-warning" {...register("feedback", { required: true })} placeholder="feedback"></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning mx-5">Sent</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
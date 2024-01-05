import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const ManageClasses = () => {
    const classes = useLoaderData();

    const update = { status: 'Approve' }

    const handleApprove = (id) => {
        fetch(`https://music-academy-eta.vercel.app/classes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your update has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })

    }

    return (
        <div className='w-11/12 mx-auto bg-white my-14 rounded-2xl'>
            <div className='text-center pb-10 mt-10'>
                <h1 className='text-3xl font-serif font-bold text-warning'>Manage All Class</h1>
            </div>
            <div className="overflow-x-auto mt-5 px-10 pb-6">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>
                                #
                            </th>
                            <th> Class Image</th>
                            <th> Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((d, index) => <tr key={d._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar mx-auto">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={d.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">{d.name}</h1>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">{d.instructor_name}</h1>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">{d.email}</h1>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">{d.available_seats}</h1>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">${d.price}</h1>
                                </td>
                                <td>
                                    <h1 className="text-base font-medium">{d.status}</h1>
                                </td>
                                <td>
                                    <div>
                                        <div className="py-2">
                                            <Link to={`/dashboard/feedback/${d._id}`}>
                                                <button className='btn btn-sm mb-2 bg-warning'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                        <div>{d.status === 'Approve' ? <button className='btn bg-green-500 btn-sm mb-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </button> :
                                            <button onClick={() => handleApprove(d._id)} className='btn btn-sm mb-2 bg-green-500'>Approve
                                            </button>}
                                        </div>
                                        <div className="py-2">
                                            <button className='btn btn-sm bg-red-500'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
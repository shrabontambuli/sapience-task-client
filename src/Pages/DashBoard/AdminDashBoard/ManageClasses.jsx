import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const ManageClasses = () => {
    const classes = useLoaderData();

    const update = { status: 'Approve' }

    const handleApprove = (id) => {
        fetch(`https://express-music-academy-server.vercel.app/classes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
        <div className='w-full'>
            <div className='text-center pb-10 mt-7'>
                <h1 className='text-3xl font-serif font-bold text-[#196e6afa]'>Manage All Class</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
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
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={d.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1>{d.name}</h1>
                                </td>
                                <td>
                                    <h1>{d.instructor_name}</h1>
                                </td>
                                <td>
                                    <h1>{d.email}</h1>
                                </td>
                                <td>
                                    <h1>{d.available_seats}</h1>
                                </td>
                                <td>
                                    <h1>${d.price}</h1>
                                </td>
                                <td>
                                    <h1>{d.status}</h1>
                                </td>
                                <td>
                                    <div>
                                        <div>
                                            <Link to={`/dashboard/feedback/${d._id}`}>
                                                <button className='btn btn-sm mb-2 bg-[#dfe951]'>Feedback</button>
                                            </Link>
                                        </div>
                                        <div>{d.status === 'Approve' ? <button className='btn btn-ghost btn-sm mb-2'>Disable</button> :
                                            <button onClick={() => handleApprove(d._id)} className='btn btn-sm mb-2 bg-[#51e965]'>Approved</button>}
                                        </div>
                                        <div>
                                            <button className='btn btn-sm bg-[#df2c8e]'>Denied</button>
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
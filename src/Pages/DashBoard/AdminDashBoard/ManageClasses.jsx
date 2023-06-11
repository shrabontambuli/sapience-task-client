import useSelected from "../../../hooks/useSelected";


const ManageClasses = () => {
    const [classes] = useSelected();
    console.log(classes);
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
                                    <h1>{d.name}</h1>
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
                                    <button className='btn btn-sm mb-2 bg-[#dfe951]'>Pending</button>
                                    <button className='btn btn-sm mb-2 bg-[#51e965]'>Approved</button>
                                    <button className='btn btn-sm bg-[#df2c8e]'>Denied</button>
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
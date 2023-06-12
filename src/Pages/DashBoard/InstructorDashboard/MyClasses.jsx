import useAddClasses from "../../../hooks/useAddClasses";


const MyClasses = () => {
    const [addClasses] = useAddClasses();
    return (
        <div className='w-2/3'>
            <div className='text-center pb-10'>
                <h1 className='text-3xl font-serif font-bold text-[#196e6afa] mt-7'>My Add Classes</h1>
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
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addClasses.map((d, index) => <tr key={d._id}>
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
                                    <h1>{d.status}</h1>
                                </td>
                                <td>
                                    <h1>{d.feedback}</h1>
                                </td>
                                <th>
                                    <button className="btn btn-outline btn-warning">Update</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
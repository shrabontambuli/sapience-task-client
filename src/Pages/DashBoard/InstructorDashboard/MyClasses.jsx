import useAddClasses from "../../../hooks/useAddClasses";


const MyClasses = () => {
    const [addClasses] = useAddClasses();
    return (
        <div className='w-10/12 mx-auto bg-white my-14 rounded-2xl'>
            <div className='text-center pb-10 mt-10'>
                <h1 className='text-3xl font-serif font-bold text-warning'>My Add Classes</h1>
            </div>
            <div className="overflow-x-auto w-11/12 mx-auto pb-6">
                <table className="table table-zebra w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
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
                                        <div className="avatar mx-auto">
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
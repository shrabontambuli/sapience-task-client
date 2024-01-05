import useEnrolled from "../../hooks/useEnrolled";


const EnrolledClasses = () => {
    const [enrolled] = useEnrolled();
    return (
        <div className='w-11/12 mx-auto bg-white my-14 rounded-2xl'>
            <div className='text-center pb-10 mt-10'>
                <h3 className="text-3xl text-center font-serif font-bold text-warning">Enrolled Classes</h3>
            </div>
            <div className="overflow-x-auto w-11/12 mx-auto pb-6">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th> Class Image</th>
                            <th> Class Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((d, index) => <tr key={d._id}>
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
                                    <h1 className='text-xl font-serif'>{d.name}</h1>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;
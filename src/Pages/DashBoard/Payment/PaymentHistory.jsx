import useEnrolled from "../../../hooks/useEnrolled";

const PaymentHistory = () => {
    const [enrolled] = useEnrolled();
    const data = [...enrolled].reverse();
    return (
        <div className='w-11/12 mx-auto bg-white my-14 rounded-2xl'>
            <div className='text-center pb-10 mt-10'>
                <h3 className="text-3xl text-center font-serif font-bold text-warning">Payment History</h3>
            </div>
            <div className="overflow-x-auto w-11/12 mx-auto pb-6">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Name</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Date And Time</th>
                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           data.map((d, index) => <tr key={d._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <h1>{d.name}</h1>
                                </td>
                                <td>
                                    <h1>{d.email}</h1>
                                </td>
                                <td>
                                    <h1>$ {d.price}</h1>
                                </td>
                                <td>
                                    <h1>{d.date}</h1>
                                </td>
                                <td>
                                    <h1>{d.transactionId}</h1>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
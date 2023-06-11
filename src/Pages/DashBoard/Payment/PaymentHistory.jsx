import useEnrolled from "../../../hooks/useEnrolled";

const PaymentHistory = () => {
    const [enrolled] = useEnrolled();
    console.log(enrolled);
    return (
        <div>
            <div className='text-center pb-10'>
                <h1 className='text-3xl font-serif font-bold text-[#1e7275fa]'>My Payment History</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
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
                            enrolled.map((d, index) => <tr key={d._id}>
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
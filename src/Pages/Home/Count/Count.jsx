import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Count = () => {
    const [countOn, setCountOn] = useState(false);
    const [payment, setPayment] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://music-academy-eta.vercel.app/classes')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        fetch('https://music-academy-eta.vercel.app/payment')
            .then(res => res.json())
            .then(data => setPayment(data))
    }, []);
    return (
        <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
            <h1 className="text-center text-4xl font-semibold mt-14">Our Services Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center w-7/12 mx-auto pt-24 pb-36 gap-6">
                {
                    countOn &&
                    <div className="text-center text-white w-11/12 mx-auto">

                        <div className="stats shadow-2xl p-6 border-2 border-warning">

                            <div className="stat">
                                <div className="stat-figure text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                <div className="text-base font-semibold">Our Total Classes</div>
                                <div className="text-5xl text-warning py-4">
                                    <CountUp
                                        start={0}
                                        end={data.length}
                                        duration={3.75}

                                        onEnd={() => console.log('Ended! 👏')}
                                        onStart={() => console.log('Started! 💨')}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <h1 className="inline-flex" onClick={start}>+</h1>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className="text-sm font-semibold">21% more than last month</div>
                            </div>
                        </div>
                    </div>
                }
                {
                    countOn &&
                    <div className="text-center text-white w-11/12 mx-auto">

                        <div className="stats shadow-2xl p-6 border-2 border-warning">

                            <div className="stat">
                                <div className="stat-figure text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg>
                                </div>
                                <div className="text-base font-semibold">Total Sale Our Classes</div>
                                <div className="text-5xl text-warning py-4">
                                    <CountUp
                                        start={0}
                                        end={payment.length}
                                        duration={3.75}

                                        onEnd={() => console.log('Ended! 👏')}
                                        onStart={() => console.log('Started! 💨')}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <h1 className="inline-flex" onClick={start}>+</h1>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className="text-sm font-semibold">21% more than last month</div>
                            </div>
                        </div>
                    </div>
                }
                {
                    countOn &&
                    <div className="text-center text-white w-11/12 mx-auto">

                        <div className="stats shadow-2xl p-6 border-2 border-warning">

                            <div className="stat">
                                <div className="stat-figure text-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                    </svg>
                                </div>
                                <div className="text-base font-semibold">Total like Our Classes</div>
                                <div className="text-5xl text-warning py-4">
                                    <CountUp
                                        start={0}
                                        end={payment.length}
                                        duration={3.75}

                                        onEnd={() => console.log('Ended! 👏')}
                                        onStart={() => console.log('Started! 💨')}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <h1 className="inline-flex" onClick={start}>+</h1>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                                <div className="text-sm font-semibold">21% more than last month</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </ScrollTrigger>
    );
};

export default Count;
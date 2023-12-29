import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Count = () => {
    const [payment, setPayment] = useState([]);
    const url = ('https://music-academy-eta.vercel.app/instructors')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [])

    const [countOn, setCountOn] = useState(false);

    const drums = payment.filter(ele => ele.name == 'Drums');
    const guitar = payment.filter(ele => ele.name == 'Guitar');
    console.log(drums, drums.length, guitar);

    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url("https://img.freepik.com/premium-photo/banner-folk-musical-instruments-watercolor-illustration-isolated_613670-726.jpg?w=2000")`
        }}>
            <div className="hero-overlay bg-black bg-opacity-60">
                <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                    {
                        countOn &&
                        <div className="text-center text-white w-11/12 mx-auto">

                            <div className="stats shadow">

                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <div className="stat-title">Total Sale Our Classes</div>
                                    <div className="stat-value text-primary">
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
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                            </div>
                                <h1>{drums.length}</h1>
                        </div>
                    }
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Count;
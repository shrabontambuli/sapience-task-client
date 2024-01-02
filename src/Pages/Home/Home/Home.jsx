// import { useEffect, useState } from "react";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import NewSection from "../NewSection/NewSection";
import Slider from "../SliderSection/Slider";
import BestClass from "./BestClass/BestClass";
import ClientSay from "./ClientSay/ClientSay";
// import CountDown from "./CountDown/CountDown";
import './Home.css';
import Parallax from "./Parallax/Parallax";
import SideBanner from "./SideBanner/SideBanner";
import SideSection from "./SideSection/SideSection";


const Home = () => {

    return (
        <>
            <div>
                <Slider />
            </div>
            <div>
                <SideBanner />
            </div>
            <div>
                <Classes />
            </div>
            <div>
                <Parallax />
            </div>
            <div>
                <Instructors />
            </div>
            <div>
                <SideSection />
            </div>
            <div>
                <BestClass />
            </div>
            <div>
                <ClientSay />
            </div>
            {/* <div>
                <CountDown />
            </div> */}
            <div>
                <NewSection />
            </div>
        </>
    );
};

export default Home;
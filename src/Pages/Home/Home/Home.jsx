import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import NewSection from "../NewSection/NewSection";
import Slider from "../SliderSection/Slider";


const Home = () => {
    return (
        <>
            <div>
                <Slider />
            </div>
            <div>
                <Classes/>
            </div>
            <div>
                <Instructors/>
            </div>
            <div>
                <NewSection/>
            </div>
        </>
    );
};

export default Home;
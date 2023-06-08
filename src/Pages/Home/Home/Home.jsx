import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
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
        </>
    );
};

export default Home;
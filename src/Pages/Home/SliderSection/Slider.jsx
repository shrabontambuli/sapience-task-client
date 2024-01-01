// import Flicking from "@egjs/react-flicking";
import Slider1 from "../../../../public/image/slider-1.jpg"
import Slider2 from "../../../../public/image/slider-2.png"
import Slider3 from "../../../../public/image/slider-3.jpg"
import Slider4 from "../../../../public/image/slider-4.webp"
const Slider = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={Slider1} className="w-full h-[550px]" />
                    <div className="absolute top-56 text-white lg:left-[38%] text-center bg-opacity-20 bg-black p-5">
                        <h1 className="text-5xl font-sans font-semibold">Music is Your Wold</h1>
                        <p className="text-3xl font-sans font-semibold mt-3">Do not miss a chance</p>
                        <button className="btn btn-warning font-sans font-semibold mt-5">START LEARNING</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={Slider2} className="w-full h-[550px]" />
                    <div className="absolute top-56 text-white lg:left-[38%] text-center bg-opacity-20 bg-black p-5">
                        <h1 className="text-5xl font-sans font-semibold">Start With A Note</h1>
                        <p className="text-3xl font-sans font-semibold mt-3">Awaken Possibility</p>
                        <button className="btn btn-warning font-sans font-semibold mt-5">START LEARNING</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={Slider3} className="w-full h-[550px]" />
                    <div className="absolute top-56 text-white lg:left-[38%] text-center bg-opacity-20 bg-black p-5">
                        <h1 className="text-5xl font-sans font-semibold">Music is Your Wold</h1>
                        <p className="text-3xl font-sans font-semibold mt-3">Do not miss a chance</p>
                        <button className="btn btn-warning font-sans font-semibold mt-5">START LEARNING</button>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={Slider4} className="w-full h-[550px]" />
                    <div className="absolute top-56 text-white lg:left-[38%] text-center bg-opacity-20 bg-black p-5">
                        <h1 className="text-5xl font-sans font-semibold">Music For Everyone</h1>
                        <p className="text-3xl font-sans font-semibold mt-3">Awaken Possibility</p>
                        <button className="btn btn-warning font-sans font-semibold mt-5">START LEARNING</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>

        // <Flicking
        //     align="prev"
        //     circular={true}
        //     onMoveEnd={e => {
        //         console.log(e);
        //     }}>
        //     <div className="panel">
        //         <img src={Slider1} alt="" />
        //     </div>
        //     <div className="panel">
        //         <img src={Slider2} alt="" />
        //     </div>
        //     <div className="panel">
        //         <img src={Slider3} alt="" />
        //     </div>
        // </Flicking>
    );
};

export default Slider;
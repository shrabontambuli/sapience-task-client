


const Footer = () => {
    return (
        <div className="bg-[#a0a09f] text-black py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 text-center font-serif items-center">
                <div className="inline-flex justify-center items-center">
                    <img className="w-16" src="/image/pngwing.com (1).png" alt="" />
                    <h1 className="text-3xl font-semibold ms-2">Express Music <br /> Academy</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Services</h1>
                    <p>Guitar</p>
                    <p>Piano</p>
                    <p>Drums</p>
                    <p>Violin</p>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
                    <p>+880 3525444545</p>
                    <p>Email: shrabon@gmail.com </p>
                    <p>ADD: Pathrail,Delduar,</p>
                    <p>Tangail</p>
                </div>
            </div>
            <hr className="mt-8 mx-20 border-black border-2" />
            <div className="text-center mt-10">
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;
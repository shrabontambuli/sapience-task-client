

const ClientSay = () => {
    return (
        <div className="bg-[#f7f7f7] py-20">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl font-semibold mt-8">What Our Clients Say</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    <div className="h-72 md:h-80 px-6 border border-warning rounded-xl p-8">
                        <p className="text-justify">“Although we were 1400 miles away we always felt that we were well informed on the progress of construction. The end product is a home we love and are proud of. Thank you for making that a reality! This was a great experience for us.”</p>
                        <div className="flex items-center mt-10">
                            <img className="me-6 w-20 h-20 rounded-full border-2 border-warning p-1" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold">David Johns</h3>
                                <p className="text-[#8E8E8E]">TEAM LEAD</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-72 md:h-80 px-6 border border-warning rounded-xl p-8">
                        <p className="text-justify">“After 20 years of experience working with dozens of contractors, I can state with confidence that Builderry Building Company has met, and even exceeded, the expectations of ourselves and our clients.”</p>
                        <div className="flex items-center mt-10">
                            <img className="me-6 w-20 h-20 rounded-full border-2 border-warning p-1" src="https://builderry.wgl-demo.net/wp-content/uploads/2018/12/testimonials_02-50x50-100x100.jpg" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold">Mark Colin</h3>
                                <p className="text-[#8E8E8E]">CEO COMPANY</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-72 md:h-80 px-6 border border-warning rounded-xl p-8">
                        <p className="text-justify">“The benefit of your thorough and detail-oriented approach to building my home cannot be understated. Every corner of the house has visual appeal... This home has turned out to be more than I had ever hoped.”</p>
                        <div className="flex items-center mt-10">
                            <img className="me-6 w-20 h-20 rounded-full border-2 border-warning p-1" src="https://builderry.wgl-demo.net/wp-content/uploads/2018/12/testimonials_03-50x50-100x100.jpg" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold">Sandra Williams</h3>
                                <p className="text-[#8E8E8E]">PROJECT MANAGER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSay;
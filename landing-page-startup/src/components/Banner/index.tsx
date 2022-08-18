import banner from "../../assets/Banner/banner.svg"

const Index = () => {
    return (
        <section className="container text-center md:pb-[80px] pb-[20px] mx-auto ">
            <h1 className="text-[62px] font-extrabold text-txt font-inter mb-4 leading-[55px] md:leading-0">Landing template for startups</h1>
            <div className="md:w-[760px] mx-auto pb-[32px]">
                <p className="text-[20px] text-center">Our landing page template works on all devices, so you only have to
                set it up once, and get beautiful results forever.</p>
            </div>
            <div className="md:mb-[64px] mb-[20px]">
                <button className="btn mr-3 transiton ease-in duration-300 hover:opacity-50">Start free trial</button>
                <button className="btn bg-[#C5D2DC] transiton ease-in duration-300 hover:opacity-50">Learn more</button>
            </div>
            <img className=" w-full md:mb-[64px] mb-[30px]" src={banner} alt="" />
        </section>
    )
}

export default Index
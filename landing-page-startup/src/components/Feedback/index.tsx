import oval1 from "../../assets/Feed-back/oval1.png"
import oval2 from "../../assets/Feed-back/oval2.png"
import oval3 from "../../assets/Feed-back/oval3.png"

const Index = () => {
    return (
        <section className="container mx-auto md:mt-20 mt-10 md:mb-20 mb-10">
            <h1 className="text-[40px] text-center font-extrabold mb-4 text-white">Don't take our word for it</h1>
            <div className="md:w-[768px] mx-auto md:pb-[80px] pb-[25px]">
                <p className="text-[20px] text-center">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
            </div>
            <div className="grid md:grid-cols-3">
                <div className="col-span-1 p-6 bg-[#25282C] md:w-[90%] mb-5">
                    <img className="mb-4" src={oval1} alt="Oval1" />
                    <p className="text-[20px] pb-6 text-[#9BA9B4] border-b-[1px] border-gray-200">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div className="flex items-center pt-5">
                        <p className="text-[16px] text-[#D9E3EA] pr-1">Anastasia Dan / </p>
                        <span className="text-[16px] text-[#5D5DFF]">UX Board</span>
                    </div>
                </div>
                <div className="col-span-1 p-6 bg-[#25282C] md:w-[90%] mb-5">
                    <img className="mb-4" src={oval2} alt="Oval2" />
                    <p className="text-[20px] pb-6 text-[#9BA9B4] border-b-[1px] border-gray-200">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div className="flex items-center pt-5">
                        <p className="text-[16px] text-[#D9E3EA] pr-1">Roman Level / </p>
                        <span className="text-[16px] text-[#5D5DFF]">AppName</span>
                    </div>
                </div>
                <div className="col-span-1 p-6 bg-[#25282C] md:w-[90%] mb-5">
                    <img className="mb-4" src={oval3} alt="Oval3" />
                    <p className="text-[20px] pb-6 text-[#9BA9B4] border-b-[1px] border-gray-200">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
                    <div className="flex items-center pt-5">
                        <p className="text-[16px] text-[#D9E3EA] pr-1">Akex Sackett / </p>
                        <span className="text-[16px] text-[#5D5DFF]">Reform Layouts</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index
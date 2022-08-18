import tick from "../../assets/Solution/tick.svg"
import solution1 from "../../assets/Solution/solution1.svg"
import solution2 from "../../assets/Solution/solution2.svg"
import solution3 from "../../assets/Solution/solution3.svg"

const Index = () => {
    return (
        <section className="container mx-auto md:mt-20 mt-14 md:pb-20 pb-10 border-b-2">
            <div className="bg-[#C6F6D5] px-1 py-1 w-[186px] mx-auto rounded-[100px] mb-[16px]">
                <h4 className="text-[#36A269] text-center font-semibold font-[14px]">Reach goals that matter</h4>
            </div>
            <h1 className="text-[40px] text-center text-txt mb-4 font-bold">One product, unlimited solutions</h1>
            <div className="md:w-[768px] mx-auto md:pb-[80px] pb-[40px]">
                <p className="text-[20px] text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
            </div>
            <div className="grid grid-cols-2 text-center md:text-start items-center md:mb-20 mb-14">
                <div className="col-span-2 md:col-span-1">
                    <h5 className="text-[#5D5DFF] text-[20px] mb-2"><i>More speed. Less spend</i></h5>
                    <h2 className="text-[32px] text-txt font-bold mb-[9px] ">Keep projects on schedule</h2>
                    <p className="text-[20px] pb-[18px]  md:justify-items-start md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Excepteur sint occaecat </p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Amet consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2 ">
                    <img className="w-full" src={solution1} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-2 items-center text-center md:mb-20 mb-14 ">
                <div className="md:col-span-1 col-span-2 md:pl-16">
                    <h5 className="text-[#5D5DFF] text-[20px] mb-2"><i>More speed. Less spend</i></h5>
                    <h2 className="text-[32px] text-txt font-bold mb-[9px] ">Keep projects on schedule</h2>
                    <p className="text-[20px] pb-[18px] md:justify-items-start md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Excepteur sint occaecat </p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Amet consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <img className="w-full   " src={solution2} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-2 text-center md:text-start items-center md:mb-20 mb-14">
                <div className="md:col-span-1 col-span-2">
                    <h5 className="text-[#5D5DFF] text-[20px] mb-2"><i>More speed. Less spend</i></h5>
                    <h2 className="text-[32px] text-txt font-bold mb-[9px] ">Keep projects on schedule</h2>
                    <p className="text-[20px] pb-[18px] md:justify-items-start md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Excepteur sint occaecat </p>
                    </div>
                    <div className="flex justify-items-start items-center">
                        <img className="text-[9px] pr-2" src={tick} alt="Tick" />
                        <p className="text-[18px] text-txt pb-2">Amet consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <img className="w-full " src={solution3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Index
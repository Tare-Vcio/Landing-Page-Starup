import logo from "../../assets/Header/logo.svg"
import twitter from "../../assets/Footer/twitter.svg"
import github from "../../assets/Footer/github.svg"
import instagram from "../../assets/Footer/instagram.svg"
import facebook from "../../assets/Footer/facebook.svg"
import linked from "../../assets/Footer/linked.svg"

const Index = () => {
  return (
    <section className="container mx-auto relative">
        <div className="grid grid-cols-5">
            <div className="col-span-2">
                <img className="pb-[14px]" src={logo} alt="" />
                <p className="md:w-[70%] pb-[63px]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>© 2020 Open PRO. All rights reserved.</p>
            </div>
            <div className="col-span-1 md:pl-[50%]">
                <ul>
                    <li className="font-bold text-white">Products</li>
                    <li>Web Studio</li>
                    <li>DynamicBox Flex</li>
                    <li>Programming Forms</li>
                </ul>
            </div>
            <div className="col-span-1 md:pl-[50%]">
                <ul>
                    <li className="font-bold text-white">Resources</li>
                    <li>Nostrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Nostrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Nostrud exercitation</li>
                </ul>
            </div>
            <div className="col-span-1 md:pl-[50%]">
                <ul>
                    <li className="font-bold text-white">Company</li>
                    <li>Consectetur adipiscing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adipiscing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adipiscing</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-end -mt-5 ">
            <img src={twitter} className="p-[9px] rounded-full bg-[#25282C] mr-4" alt="twitter" />
            <img src={github} className="p-[9px] rounded-full bg-[#25282C] mr-4" alt="twitter" />
            <img src={facebook} className="p-[9px] rounded-full bg-[#25282C] mr-4" alt="twitter" />
            <img src={instagram} className="p-[9px] rounded-full bg-[#25282C] mr-4" alt="twitter" />
            <img src={linked} className="p-[9px] rounded-full bg-[#25282C]" alt="twitter" />
        </div>
    </section>
  )
}

export default Index
import logo from "../../assets/Header/logo.svg"

const Index = () => {
    return (
        <header className="container md:mb-[63px] mb-[20px] py-6 mx-5 md:mx-[168px] justify-between items-center flex md:justify-between  relative">
            <img src={logo} alt="Logo" />
            <div className=" flex items-center absolute right-0 top-[25%] md:top-[50%]">
                <h4 className="text-base mr-12 cursor-pointer transition hover:opacity-50">Documentation</h4>
                <button className="text-base btn transiton ease-in duration-300 hover:opacity-50">Sign up</button>
            </div>
        </header>
    )
}
//63px
export default Index
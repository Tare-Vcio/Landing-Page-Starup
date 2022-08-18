
const Index = () => {
  return (
    <section className="container mb-16 bg-primary mx-auto">
        <div className="md:flex justify-between px-[48px] py-[64px]">
            <div className="">
                <h3 className="text-[32px] font-bold md:pb-2 text-white">Stay in the loop</h3>
                <p className="text-[18px] text-[#E2E1FF] mb-2 md:mb-0">Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="flex items-center">
                <input className="w-[320px] h-[48px] placeholder-style bg-[#4B4ACF] mr-2 focus-visible: outline-0" type="text" placeholder="Your best email…"/>
                <button className="btn bg-[#F4F4FF] py-[5px] text-[#5D5DFF] transition hover:opacity-50 hover:text-[#4444]">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Index
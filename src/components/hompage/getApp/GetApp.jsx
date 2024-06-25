import { Button } from "@/components/ui/button"

const GetApp = () => {

    return (
        <section>
            <div className="bg-[color:var(--col)] pb-8">
                <div className=" flex flex-row justify-left items-center p-8 bg-gradient-to-l from-cyan-300 to-blue-800 w-[70%] m-auto h-[20%] rounded-[1em]">
                    <section className="w-[55%] ml-16 pb-6">
                         <h1 className="text-[xxx-large] font-bold text-[color:var(--col-body)] leading-[50px] mb-6 mt-7 ">Get the simple app for latest news</h1>
                        <p className=" text-[medium] text-[color:var(--col-body)] opacity-80 font-light">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
                        <Button variant="destructive2" size="lg" className="bg-[color:var(--col-body)] text-[color:var(--col-common-blue)] uppercase mt-6">Download Now</Button>
                    </section>
                    <img src="/assets/images/phone-1.png" alt="phone with chart on screen" className="w-[15%] float-right absolute right-[17em] bottom-[-900px] ml-4 " />
                </div>
              
            </div>
        </section>
    )
}

export default GetApp;
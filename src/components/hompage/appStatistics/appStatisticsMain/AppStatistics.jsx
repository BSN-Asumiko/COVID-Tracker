import Statistics from "../statistics/Statistics"
import { Button } from "@/components/ui/button"

const AppStatistics = () => {
    return (
        <div className="mt-4 mb-8">
        <section className="flex flex-row pt-6 justify-center items-center w-[80%] m-auto gap-[60px]">
            <img src="/assets/images/mobiles.png" alt="phone with blue background and chart on screen" className="w-[40%] h-[100%]" />
            <aside className="w-[40%]">
                <h1 className="text-[xxx-large] font-bold text-[color:var(--col-body)] leading-[50px] mb-6 mt-7">Stay Home, And Pray For Victims</h1>
                <p className="text-[medium] text-[color:var(--col-body)] opacity-80 font-light">Human coronaviruses are common and are typically associated with mild illness, similar to the common cold.</p>
                <br/>
                <p className="text-[medium] text-[color:var(--col-body)] opacity-80 font-light">Shortness of breath can be a third--and very serious--manifestation of Covid-19, and it can occur on its own, without a cough.</p>
                <Button variant="destructive" size="lg" className="bg-[color:var(--col-common-blue)] text-[color:var(--col-body)] uppercase mt-6">Download Now</Button>
            </aside>
        </section>
        <div className=" w-[70%] text-[color:var(--col-body)] flex flex-row justify-around items-center m-auto">
            <Statistics icon="&#xE62B;" number="403" title="startups"/>
            <Statistics icon="&#xE63E;" number="120+" title="member"/>
            <Statistics icon="&#xE642;" number="22M" title="revenue"/>
            <Statistics icon="&#xE634;" number="5643" title="downloads"/>
        </div>
        </div>
    )
}

export default AppStatistics
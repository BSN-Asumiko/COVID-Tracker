
import FooterColumns from "./FooterColumns";
import IconItem from "./IconItem";


const Footer = () => {
    return (
        <footer className="w-screen flex flex-col bottom-0 bg-[color:var(--col-home-footer)] 
        text-[color:var(--col-body)] py-[3.5em]">
            <section className="flex">
                <div className="w-[32%] pl-[7cqw] mr-[3em]">
                    <img src="/assets/images/logo-white.png" alt="Covimap logo" />
                    <p className="my-[1.8em] text-[0.9em] opacity-[50%] font-extralight tracking-[0.04em]  leading-[2em]">These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
                    </p>
                    <ul className="flex "> 
                        <IconItem icon="&#xf09a;" link="https://www.facebook.com/"/>
                        <IconItem icon="&#xf099;" link="https://x.com/?lang=ca/"/>
                        <IconItem icon="&#xf0e1;" link="https://www.linkedin.com/"/>
                        <IconItem icon="&#xf167;" link="https://www.youtube.com/"/>
                    </ul>
                </div>
                <div className="w-[65%] flex justify-around">
                    <FooterColumns />
                </div>
            </section>
            <hr className="bg-[color:var(--col-body)] opacity-[20%] mt-[5em]" />
            <section className="flex justify-between px-[7cqw]  mb-[-2.5em] pt-[1.5em] text-[0.9em] ">
                
                <p className="opacity-[50%]"><span className="icon-f mr-[0.3em]">&#xf1f9;</span>Copyright 2020. All rights reserved</p>
                <p><span className="opacity-[50%]">Design by </span> <span className="font-bold">DexignZone</span></p>
            </section>
        </footer>
    )
}



export default Footer
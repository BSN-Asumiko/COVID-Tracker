
import FooterColumns from "./footerColumns/FooterColumns";
import IconItem from "./iconItem/IconItem";


const Footer = () => {
    return (
        <footer className="w-screen bottom-0 absolute flex bg-[color:var(--col-home-footer)] 
        text-[color:var(--col-body)] py-[3.5em]">
            <div className="w-[32%] pl-[7cqw] mr-[3em]">
                <img src="/assets/images/logo-white.png" alt="Covimap logo" />
                <p className="my-[1.8em] text-[0.8em] opacity-[50%] font-extralight tracking-[0.04em]  leading-[2em]">These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
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
        </footer>
    )
}



export default Footer
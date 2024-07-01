/* eslint-disable react/prop-types */
import links from "@/utils/footerLinksData"

const FooterColumns = () => {
    return (
        < >
            {links.map((object, index) => (
                <ul key={index} className="text-[0.8em] tracking-[0.04em] ">
                    <p className="">{object.title}</p>
                    <FooterLink link = {object.link1}/>
                    <FooterLink link = {object.link2}/>
                    <FooterLink link = {object.link3}/>
                    <FooterLink link = {object.link4}/>
                </ul>
            ))}
        </>
    )
}

const FooterLink = ({link}) => {
    return (
        <li className="opacity-[50%] mt-[1.5em] font-extralight ">{link}</li>
    )
}

export default FooterColumns
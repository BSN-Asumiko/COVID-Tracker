import Accordion from "../accordion/Accordion";

const Faq = () => {
    return (
        <section className="flex flex-col p-6 justify-center gap-5">
            <div className="text-center w-[500px] m-auto">
                <p className=" text-[medium] text-[color:var(--col-body)] opacity-80">Faqs</p>
                <h1 className=" text-[xxx-large] font-bold text-[color:var(--col-body)] leading-[60px]">Frequently Asked Questions</h1>
            </div>
            <div className="m-auto w-[50%] bg-[color:var(--col-bg-regal-blue)] rounded-lg pt-3 ">
                <Accordion title='01. Unique and bold website design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                <Accordion title='02. We are ready to start now' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                <Accordion title='03. We deliver the highest quality design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                <Accordion title='04. We deliver the highest quality design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
            </div>
        </section>
    )
    
}

export default Faq;
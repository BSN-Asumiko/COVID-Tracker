import Accordion from "./Accordion";

const Faq = () => {
    return (
        <section className="w-[60%] flex flex-col p-6 justify-center">
            <div className="w-[40%] justify-center">
                <p className="text-center text-[small] text-[color:var(--col-body)]">Faqs</p>
                <h1 className="text-center text-[xx-large] font-bold text-[color:var(--col-body)] ">Frequently Asked Questions</h1>
            </div>
            <div className="mt-8 p-4 bg-[color:var(--col-bg-regal-blue)] rounded-lg">
                <Accordion title='01. Unique and bold website design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
                <Accordion title='02. We are ready to start now' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                <Accordion title='03. We deliver the highest quality design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
                <Accordion title='04. We deliver the highest quality design' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '/>
            </div>
        </section>
    )
    
}

export default Faq;
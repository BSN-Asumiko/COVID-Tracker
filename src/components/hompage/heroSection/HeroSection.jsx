 import { Link } from "react-router-dom"

const HeroSection = () => {
  return (

    <div className="w-screen bg-gradient-to-b from-[color:var(--col-home-gradient-start)] to-[color:var(--col-home-gradient-end)] px-6 pt-[3em] h-[90%]">  
      <section className="flex flex-row justify-center align-items-center p-4">
          <div className="ml:flex flex-col justify-center ml:justify-end gap-[0.5em] w-[5%] hidden">
              <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-arrow-btn)] mt-1">
                <p className="icon-f text-white p-1 text-[x-small] ml:text-[large]" >&#xF064;</p>
              </div>
              <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-contact-btn)] mt-1">
                <span className="icon  text-white  p-1 text-[large]" >&#xE719;</span>
              </div>
              <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-cart-btn)] mt-1">
                <span className="icon  text-white  p-1 text-[large]" >&#xE60D;</span>
              </div>
          </div>
          <div className="flex flex-col ml:flex-row justify-around content-center ml:ml-[2em]">
            <div className="ml:w-[50%] m-auto ml:m-0 mb-[5em] order-0 ml:order-2 flex justify-center ml:block">
                <img src="../assets/images/phones.png" alt="Image girl with Covid at a cellphone" className="w-[80%]" />
            </div>
            <div className="w-[90%] ml:w-[63%] flex flex-col justify-start pb-[10%] text-center ml:text-left ">
                <h1 className="text-[xxx-large] ml:w-[80%] font-bold leading-[3.125rem] text-[color:var(--col-body)] leading-[4rem]">Download the covid app for get latest update</h1>
                <p className="text-[color:var(--col-body)] text-[medium] mt-4 ml:w-[80%] pb-4 leading-[2em]"> Human coronaviruses are common and are typically associated with mild illnesses, similar m 1º  to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances. </p>
                <div className="w-full flex ml:justify-start justify-center mb-8">
                  <Link to="/tracker" className="mt-10 px-[4cqw] py-[1.2em] rounded-[2.9em] text-[color:var(--col-body)] bg-[color:var(--col-home-protect-btn)] border-[color:var(--col-common-blue)] border-[0.125rem]">
                  HOW TO PROTECT
                  </Link>
              </div>
            </div>
            
          </div>
      </section >


    </div>

  )
}

export default HeroSection

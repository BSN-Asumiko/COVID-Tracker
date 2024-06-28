 import { NavLink } from "react-router-dom"

const HeroSection = () => {
  return (

    <div className="w-screen bg-gradient-to-b from-[color:var(--col-home-gradient-start)] to-[color:var(--col-home-gradient-end)] px-6 pt-[3em] h-[90%]">  
      <section className="flex flex-row justify-center align-items-center p-4">
          <div className="flex flex-col justify-center ml:justify-end gap-[0.5em] w-[5%]]">
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
          <div className="flex flex-col ml:flex-row justify-center">
            <div className="w-[50%] ml:w-[25%] mb-[5em] order-0 ml:order-2">
                <img src="../assets/images/phones.png" alt="Image girl with Covid at a cellphone" className=" content-center h-auto" />
            </div>
            <div className="w-[90%] m-auto ml:w-[55%] mr-6 ml-9 flex flex-col justify-start items-center pb-[10%]">
                <h1 className="text-[xxx-large] font-bold leading-[3.125rem] ml:w-[65%] text-[color:var(--col-body)] ">Download the covid app for get latest update</h1>
                <p className="text-[color:var(--col-body)] text-[medium] mt-4 ml:w-[65%] pb-4"> Human coronaviruses are common and are typically associated with mild illnesses, similar m 1º  to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances. </p>
                <div className="w-full flex justify-start pl-10 ml-[25%]">
                  <NavLink to="/tracker" className="mt-10 px-[4cqw] py-[1.2em] rounded-[2.9em] text-[color:var(--col-body)] bg-[color:var(--col-home-protect-btn)] border-[color:var(--col-common-blue)] border-[0.125rem]">
                  HOW TO PROTECT
                  </NavLink>
              </div>
            </div>
            
          </div>
      </section >


    </div>

  )
}

export default HeroSection

import { NavLink } from "react-router-dom"

const HeroSection = () => {
  return (

    <div>  
    <section className="bg-gradient-to-b from-cyan-600 to-blue-900 flex flex-row justify-center align-items-center p-4">
        <div className="flex flex-col justify-end w-[5%]">
            <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-arrow-btn)] mt-1">
            <p className="icon-f text-white p-1" >&#xF064;</p>
            </div>
            <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-contact-btn)] mt-1">
            <span className="icon  text-white  p-1" >&#xE719;</span>
            </div>
            <div className=" flex justify-center items-center rounded-[50%] size-[3em] bg-[color:var(--col-home-cart-btn)] mt-1">
            <span className="icon  text-white  p-1" >&#xE60D;</span>
            </div>
        </div>
        <div className=" m-auto w-[55%] mr-6 ml-7 ">
            <h1 className=" text-[xxx-large] font-bold leading-[40px] text-[color:var(--col-body)] w-[45%]">Download the covid app for get latest update</h1>
            <p className="text-[color:var(--col-body)] text-[medium] mt-4 w-[45%] pb-4"> Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances. </p>
            <span>
            <NavLink to="/tracker" className="mt-10 px-[4cqw] py-[0.7em] rounded-[1.5em] text-[color:var(--col-body)] bg-[color:var(--col-home-main)] border-[color:var(--col-common-blue)] mt-26 border-[2px]">
                HOW TO PROTECT</NavLink>
            </span>
        </div>
        <div className="w-[40%]">
            <img src="../assets/images/phones.png" alt="Image girl with Covid at a cellphone" />
        </div>
    </section >


    </div>

  )
}

export default HeroSection
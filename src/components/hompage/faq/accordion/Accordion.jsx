/* eslint-disable react/prop-types */
import { useState } from 'react'

const Accordion = ({title, answer}) => {

        const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="text-[color:var(--col-body)] py-2 px-7 justify-center">
        <button 
        onClick={() => setAccordionOpen(!accordionOpen)} 
        className="flex justify-between w-full">
            <span className="font-bold pt-3">{title}</span>
            {/*{accordionOpen ? <span>-</span> : <span>+</span>}*/}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen 
            ? 'grid-rows-[1fr] opacity-100' 
            : 'grid-rows-[0fr] opacity-0'
            }`}
            >
            <div className="overflow-hidden text-[color:var(--col-body)] pt-4 mt-6 mb-2 font-light leading-[25px] opacity-80">{answer}</div>
        </div>
    </div>
  )
}

export default Accordion;

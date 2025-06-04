import { useEffect, useState } from "react";
import data from "./mocks/accordion-data";
import AccordionList from "./components/AccordionList";
import './css/Accordion.css';

const Accordion = () => {
    return (
        <div className="Accordion">
            <header>
                <h3>Site FAQ</h3>
            </header>
            <section>
                <AccordionList items={data}/>
            </section>
        </div>
    );
}

export default Accordion;
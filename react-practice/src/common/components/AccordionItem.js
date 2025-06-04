import { useState } from "react";
import '../css/AccordionItem.css';

const AccordionItem = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='accordion-item'>
            <header onClick={() => setIsOpen(!isOpen) }>
                <h3 className='title'>{title}</h3>
                <div className='icon'>
                    {isOpen ? "-" : "+"}
                </div>
            </header>
            <article className={isOpen && 'open'}>
                {content}
            </article>
        </div>
    );
}

export default AccordionItem;
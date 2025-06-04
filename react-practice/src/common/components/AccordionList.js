import AccordionItem from "./AccordionItem";

const AccordionList = ({items}) => {
    return (
        <>
            {items.map((item) => {
                return (<AccordionItem title={item.title} content={item.content}/>);
            })}
        </>
    );
}

export default AccordionList;
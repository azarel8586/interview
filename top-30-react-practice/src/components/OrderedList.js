import React from "react";

const OrderedList = ({items}) => {
    return (
        <ol>
            {items.map((item, idx) => {
                return <li key={idx}>{item}</li>
            })}
        </ol>
    );
};

OrderedList.defaultProps = {
    items: [
        'foo', 'bar', 'bazz'
    ]
}

export default OrderedList;
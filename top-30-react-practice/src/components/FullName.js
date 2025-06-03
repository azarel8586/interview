import React from "react";

const FullName = ({firstName, lastName}) => {
    const fullName = `${firstName} ${lastName}`;
    return (
        <div>
            <p>{fullName}</p>
        </div>
    );
}

export default FullName;

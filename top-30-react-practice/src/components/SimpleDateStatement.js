import React from "react";

const SimpleDateStatement = () => {
    const now = new Date();
    const dateString = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`;

    return (
        <p>Today's date is: {dateString}</p>
    );
}

export default SimpleDateStatement;

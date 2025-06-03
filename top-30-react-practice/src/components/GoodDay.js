import React from "react";
import { Temporal } from 'temporal-polyfill'

const GoodDay = () => {
    const currTime = Temporal.Now.plainTimeISO();

    const getSalutation = () => {
        let ret = 'Good Morning!';
        if (currTime.hour > 17) {
            ret = 'Good Evening!';
        } else if (currTime.hour > 12) {
            ret = 'Good Afternoon.'
        }
        return (ret);
    }

    return (
        <div>
            <p>{getSalutation()}</p>
        </div>
    );
}

export default GoodDay;

import React, {useState} from "react";

const LoadImgFromProp = ({uri}) => {
    return (
        <div>
            {uri && <img src={uri}/>}
        </div>
    );
}

export default LoadImgFromProp;

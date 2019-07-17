import React from "react";

const stringLength = props => {
    let textToDisplay = props.wordLength >= 5 ? "Text long enough" : "Text too short!";
    return <p>{textToDisplay}</p>;
};

export default stringLength;

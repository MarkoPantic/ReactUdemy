import React, { Component } from "react";

// class UserOutput extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.children}</p>
//             </div>
//         );
//     }
// }
const userOutput = props => {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;

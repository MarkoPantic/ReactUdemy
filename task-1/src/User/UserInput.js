import React, { Component } from "react";


// class UserInput extends Component {
//     render(){
//         return (
//             <div>
//                 <input type='text' onChange={this.props.changed} placeholder={this.props}/>
//             </div>
//         )
//     }
// }

// export default UserInput


const userInput = props => {
    return (
        <input
            type="text"
            onChange={props.changed}
            placeholder={props.username}
        />
    );
};


export default userInput;
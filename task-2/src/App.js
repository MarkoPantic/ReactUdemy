import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.module.css";
import StringLength from './Components/StringLength';
import CharComp from './Components/CharComp';

class App extends Component {
    state = {
        word: "Pocetni tekst",
    };

    lengthListener = event => {
        this.setState({
            word: event.target.value
        })
    };

    
    removeChar = (index) => {
        let cpState = {...this.state};
        let wordArr = cpState.word.split("")
        
        wordArr.splice(index, 1);
        cpState.word = wordArr.join('');
        this.setState({
            word: cpState.word
        })
    }


    render() {

        let charList = null;

        charList = this.state.word.split('').map((el, index) => {
            return (
                <CharComp char={el} click={() => {this.removeChar(index)}}/>
            )
        })

        return (
            <div>
                <input
                    type="text"
                    value={this.state.word}
                    onChange={this.lengthListener}
                />
                <StringLength wordLength={this.state.word.length}/>
                {charList}
            </div>
        );
    }
}

export default App;

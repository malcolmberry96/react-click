import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import CharacterCards from "./components/CharacterCard";
import characters from "./characters.json";
import Score from "./components/Score";



class App extends Component {
//Setting state to 0
    state = {
        characters, 
        clickedCharacters: [],
        score: 0
    };



//Game Logic 
shuffle = id => {
    //Shuffle card functionality 
    this.setState({
        characters: this.state.characters.sort(function (a,b){
            return 0.5 - Math.random();
        }),
        clickedCharacters: this.state.clickedCharacters.concat(id),
        //Increase score 
        score: this.state.score + 1
    });

//Reset game if the same character is clicked 
    if (this.state.clickedCharacters.includes(id)) {
        alert("You lost, play again?");
        this.setState({
            clickedCharacters: [],
            score: 0
        })
    };

};

//Alert player if they win by matching 12 characters 
    Win = () => {
        if (this.state.score === 12) {
       alert ("You win");
       this.setState({
           //Reset Game 
           clickedCharacters: [],
           score: 0
       })
    };
};

//Component set up 
render () {
    //Check win first 
    this.Win();
    return (
        <Wrapper>
            {this.state.characters.map(characters => (
                <CharacterCards
                    id={characters.id}
                    key={characters.id}
                    name={characters.name}
                    image={characters.image}
                    shuffle={this.shuffle}
                />
            ))}
            <Score>{this.state.score}</Score>
        </Wrapper>
    );
  };
};



export default App;
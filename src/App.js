import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Characters from "./components/Characters";
import characters from "./characters.json";
import Score from "./components/Score";
import { finished } from "stream";



class App extends Component {
//Setting state to 0
    state = {
        characters, 
        clickedCharacters: [],
        score: 0
    };

//when a character is clicked, the character is taken out of the array 
characterClick = event => {
    const currentCharacter = event.target.alt;
    const characterClicked =
    this.state.clickedCharacters.indexOf(currentCharacter) > -1;


//If a character is clicked the game is reset and the cards are reshuffled. 
if (characterClicked) {
    this.setState({
        characters: this.state.characters.sort(function(a,b) {
            return 0.5 - Math.Random();
        }),
        clickedCharacters : [],
        score: 0
    });
        alert("You lost. Play again?");

//Click on a character that was not previosly selected, score is increased
} else {
    this.stateState(
        {
            characters: this.state.characters.sort(function(a,b){
                return 0.5 - Math.random();
            }),
            clickedCharacters: this.state.clickedCharacters.concat(
               currentCharacter 
            ),
            score: this.state.score + 1
        },
//if all characters are selected correctly, game resets and displays "you win" message
        () => {
            if (this.state.score === 12){
                alert("You won! Great Memory! Play again? ");
                this.state({
                    characters: this.state.characters.sort(function(a,b){
                        return 0.5 - Math.random();
                    }),
                    clickedCharacters: [],
                    score: 0
                });
            }
        }
    );
  }
};

//order of components render 
render() {
    return(
            <Wrapper>
                {this.state.characters.map(characters => (
                    <Characters
                        characterClick={this.characterClick}
                        id={characters.id}
                        key={characters.id}
                        image={characters.image}
                    />
                ))}
                <Score>{this.state.score}</Score>
            </Wrapper>
    );
};

};


export default App;
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import SneakerCard from "./components/SneakerCard";
import sneakers from "./sneakers.json";
import Score from "./components/Score";
import Title from "./components/Title";



class App extends Component {
//Setting state to 0
    state = {
        sneakers, 
        clickedSneakers: [],
        score: 0
    };



//Game Logic 
shuffle = id => {
    //Shuffle card functionality 
    this.setState({
        sneakers: this.state.sneakers.sort(function (a,b){
            return 0.5 - Math.random();
        }),
        clickedSneakers: this.state.clickedSneakers.concat(id),
        //Increase score 
        score: this.state.score + 1
    });

//Reset game if the same character is clicked 
    if (this.state.clickedSneakers.includes(id)) {
        alert("You lost, play again?");
        this.setState({
            clickedSneakers: [],
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
           clickedSneakers: [],
           score: 0
       })
    };
};

//Component set up 
render () {
    //Check win first 
    this.Win();
    return (
        <div>
        <Wrapper>
            <Title>HYPE Memory</Title>
            <Score>{this.state.score}</Score>
            {this.state.sneakers.map(sneakers => (
                <SneakerCard
                    id={sneakers.id}
                    key={sneakers.id}
                    name={sneakers.name}
                    image={sneakers.image}
                    shuffle={this.shuffle}
                />
            ))}
        </Wrapper>
        </div>
    );
  };
};



export default App;
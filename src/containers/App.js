import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

/*radimo STATE komponentu pomoću constructor da searchbox komunicira s props (robots)*/
/*initial state of searchfield is blank*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  /*kada upišemo nešto u search, traži po tome-event.target.value*/
  /*constructor and render are pre-built but if we use our functions, we have to use ARROW FUNCTIONS- onSearchChange = event =>*/
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  /*destructuring-robots,searchfield=this.state;*/
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    /*if we have a ton uf users, we can write an if statement*/
    if (robots.length === 0) {
      return <h1> Loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

/*We have our "App" component that has two states - "robots" and "searchfield"

And because "App" owns the state, any component that has "state" uses the "class" syntax so they can use the

"constructor" function to create "this.state", and this "state" is what changes in an app

It's what describes the app

Remember when I said the virtual DOM is just a javascript object? The virtual DOM is just an object that

collects this entire state and React uses this state to render and pass them down as props to these

components so that these components that are just pure functions can just render

And we always know that the app is going to look the same because, well, they're just simple pure functions

We manage this state in here, the app is the only thing that can change this state

But it can pass down things such as props, so we passed down "onSearchChange" to the "SearchBox", and the

"SearchBox", every time there's an "onChange" on the input,

it lets the app know "Hey, there was a change"

"Run this function"

It runs the function with the event and updates the state of the "searchfield" to whatever we type

"Hey, I want to filter the "robots" state to now have only what includes in the "searchfield"

and instead of passing that "this.state" to our "robots" we just passed the "filteredRobots"
...Most of the time you're getting the users or robots from another place over the internet in which

case we will need "robots" to change from an empty array to an array

after we go and grab all of our users*/

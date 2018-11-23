import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor", this.props);
    //this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handReduction = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  incrementEvent = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  gettingReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  decrementEvent = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="Container">
          <Counters
            onReset={this.gettingReset}
            counters={this.state.counters}
            onDelete={this.decrementEvent}
            onIncrement={this.incrementEvent}
            onReduce={this.handReduction}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

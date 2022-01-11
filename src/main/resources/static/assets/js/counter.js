class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 1 };
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      if (this.state.counter === 25) {
        return;
      } else {
        this.setState({ counter: this.state.counter + 1 });
      }
    }

    render() {
      return this.state.counter;
    }
  }

  ReactDOM.render(
    <Counter />,
    document.getElementById("counter")
  );
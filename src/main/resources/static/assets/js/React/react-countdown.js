class Countdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        daysLeft: 0,
        hoursLeft: 0,
        minutesLeft: 0,
        secondsLeft: 0,
      };
    }

    componentDidMount() {
      this.timerID = setInterval(() => {
        let date = new Date();
        let date2 = new Date("3/14/2022");

        let daysLeft = parseInt(
          (date2.getTime() - date.getTime()) / (1000 * 3600 * 24)
        );

        let hoursLeft = 23 - date.getHours();

        let minutesLeft = 59 - date.getMinutes();

        let secondsLeft = 60 - date.getSeconds();

        this.setState({
          daysLeft: daysLeft,
          hoursLeft: hoursLeft,
          minutesLeft: minutesLeft,
          secondsLeft: secondsLeft,
        });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    render() {
      return (
        <div className="row">
          <div className="col counter">
            <h1 className="title counter-header">{this.state.daysLeft}</h1>
            <h3 className="heading counter-text">Days</h3>
          </div>
          <div className="col counter">
            <h1 className="title counter-header">{this.state.hoursLeft}</h1>
            <h3 className="heading counter-text">Hours</h3>
          </div>
          <div className="col counter">
            <h1 className="title counter-header">{this.state.minutesLeft}</h1>
            <h3 className="heading counter-text">Minutes</h3>
          </div>
          <div className="col counter">
            <h1 className="title counter-header">{this.state.secondsLeft}</h1>
            <h3 className="heading counter-text">Seconds</h3>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<Countdown />, document.getElementById("countdown"));
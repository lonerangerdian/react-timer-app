import React, { Component } from 'react';

type Props = {};
type State = {
  timer: number;
};

class TimerComponent extends Component<Props, State> {
  intervalId: NodeJS.Timer | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        Timer: {this.state.timer} seconds
      </div>
    );
  }
}

export default TimerComponent;
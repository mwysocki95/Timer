import React from 'react'

class CounterClass extends React.Component {

    state = { seconds: 0 };

    componentDidMount() {
      this.counter();
    }
  
    counter() {
      this.interval = window.setInterval( () => this.setState({ seconds: this.state.seconds + 1 }),
        1000
      );
    }

    render () {
        return (
            <div>
               <h2>And furthermore ... {this.state.seconds} seconds more.</h2>
            </div>
         );
    }
    
}

export default CounterClass;
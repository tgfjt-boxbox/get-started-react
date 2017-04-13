/* global React, ReactDOM */

// Hello なんたらかんたらって表示するだけの Component
class HelloMessage extends React.Component {
  render() {
    return <h1 className="title">Hello {this.props.name}</h1>;
  }
}

// お祝い Component
class Congrats extends React.Component {
  render() {
    return <div className="🎉">🎉🎉🎉</div>;
  }
}

// ＋とーボタンがあって、数字が加減される Component
// 10 になったら、何かしら起きる
class Counter extends React.Component {
  constructor () {
    super();
    
    // 最初は0から始まる
    this.state = {
      value: 0
    };
  }
  
  render() {
    // 足します
    const increment = () => {
      this.setState({
        value: this.state.value + 1
      });
    };

    // 引きます
    const decrement = () => {
      this.setState({
        value: this.state.value - 1
      });
    };
    
    // 10 のときには、Congrats を表示するよ
    const Ten = this.state.value === 10 ? <Congrats /> : '';

    return (
      <div className="counter">
        {Ten}
         <h3>Current Count: <span className="count">{this.state.value}</span></h3>
        <button className="btn btn-increment" onClick={increment}>++</button>
        <button className="btn btn-decrement" onClick={decrement}>--</button>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    // class= じゃなくて className= なの要注意よ
    return (
      <div className="app">
        <HelloMessage name="World!!" />
        <Counter />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

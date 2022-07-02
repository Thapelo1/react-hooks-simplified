import React from 'react';


class ClassCounter extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  changeCount(amount) {
    this.setState(prevState => {
      return { count: prevState.count + amount }
    })
  }

  resetCount() {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div className="container pt-5">
        <h1>React Class based react component</h1>
        <h1>{this.state.count}</h1>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={() => this.changeCount(1)}>+</button>
          <button className="btn btn-primary" type="button" onClick={() => this.changeCount(-1)}>-</button>
          <button className="btn btn-primary" type="button" onClick={() => this.resetCount(1)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default ClassCounter;

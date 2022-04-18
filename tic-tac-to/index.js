const Square = (props) => {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  };

class Board extends React.Component {    
  renderSquare(i) {
    return <Square 
             value={this.props.squares[i]}
             onClick={()=>this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      xIsNext: true, 
      stepNumber: 0,
    }
  }
  
  getRecent() {
    const history = this.state.history;
    return history[history.length - 1].squares;
  }
  
  winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  calculateWinner(squares) {
    for (let i = 0; i < this.winningLines.length; i++) {
      const [a, b, c] = this.winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      } 
    }
    return null;
  }
  
  handleClick(i) {
    const history = this.state.history;
    const current = this.getRecent();
    console.log('curr', current);
    const squares = current.slice();
    if (squares[i] !== null || this.calculateWinner(squares)) return;
    console.log("piss", [...history, squares]);
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: [...history, {squares: squares}], 
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber+1,
    });
  }
  
  jumpTo(step) {
    this.setState({
      history: this.state.history.slice(0, step+1),
      stepNumber: step,
      xIsNext: (step%2)===0,
    });
  }
  
  render() {
    const current = this.getRecent();
    let status;
    const winner = this.calculateWinner(current);
    if (winner) {
      status = 'Winner: ' +  winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
    }
    
    const history = this.state.history;
    const moves = history.map((step, move) => {
      const desc = move ?
            'Go to move #' + move :
            'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

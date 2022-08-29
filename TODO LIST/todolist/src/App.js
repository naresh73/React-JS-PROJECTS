import './App.css';
import { connect } from 'react-redux';
// import { incrementCount, decrementCount } from'./redux/action';

function App({ count }) {
  return (
    <div className="App">
      <h1>{count}fsfsf</h1>
      <p>fsfsfsfsmdbskjghkfhkv</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);

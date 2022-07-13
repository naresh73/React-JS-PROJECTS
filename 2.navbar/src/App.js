import './App.css';
import FormFill from './form';
import ResponsiveAppBar from './navbar';
// import Slide from './navbar';


function App() {

  return (
    <div>
      {/* <Slide/> */}
      <ResponsiveAppBar/>
      <FormFill/>
    </div>
  );
}

export default App;
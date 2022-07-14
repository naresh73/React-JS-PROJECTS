import './App.css';
import './components/Footer/footer.css';
import Foot from './components/Footer/footer';
import FormFill from './components/Form/form';
import ResponsiveAppBar from './components/Navbar/navbar';

// import Slide from './navbar';


function App() {

  return (
    <div>
      {/* <Slide/> */}
      <header>
      <ResponsiveAppBar />
      </header>
      <FormFill />
      <Foot />
    </div>
  );
}

export default App;
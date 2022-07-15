import './App.css';
import './components/Footer/footer.css';
import Foot from './components/Footer/footer';
import FormFill from './components/Form/form';
import ResponsiveAppBar from './components/Navbar/navbar';


function App() {
      
  return (
    <div>
      <ResponsiveAppBar />
      <FormFill />
      <Foot />
    </div>
  );
}

export default App;
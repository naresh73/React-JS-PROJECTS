import './App.css';
import './components/button/button.css';
import Popup from './components/form/form';
import Foot from './components/Footer/footer'
import ResponsiveAppBar from './components/Navbar/navbar';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Popup/>
      <Foot />
    </div>
  );
}

export default App;
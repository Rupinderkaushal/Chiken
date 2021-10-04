
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Hero from './Components/Hero Section/Hero'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
         </div>
  );
}

export default App;

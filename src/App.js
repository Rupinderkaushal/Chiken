
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Hero from './Components/Hero Section/Hero'
import Afilter from './Components/Arrayfilter/Afilter';
import FilterBtn from './Components/FilterBtn/FilterBtn';
function App() {
  return (
    <div className="App">
      {/* <Afilter/> */}
     <Navbar/>
     <Hero/>
              </div>
  );
}

export default App;

import "./App.css";
import CustomersSays from "./Components/CustomersSays";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Chicago from "./Components/Chicago";
import Hero from './Components/Hero';
import Specials from './Components/Specials'

function App() {
  return (
    <div className="container">
        <Navbar  />
        <Hero />
        <Specials />
        <CustomersSays/>
        <Chicago />
        <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import CustomersSays from "./Components/CustomersSays";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Chicago from "./Components/Chicago";

function App() {
  return (
    <div className="container">
        <Navbar  />
        <Main  />
        <CustomersSays/>
        <Chicago />
        <Footer />
    </div>
  );
}

export default App;

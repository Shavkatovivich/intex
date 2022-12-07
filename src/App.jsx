import "./App.css";
import Customer from "./Components/Customer/Customer";
import Delivery from "./Components/Delivery/Delivery";
import Footer from "./Components/Footer/Footer";
import FramePools from "./Components/FramePools/FramePools";
import Header from "./Components/Header/Header";
import InftablePool from "./Components/InftablePool/InftablePool";
import ThreePool from "./Components/ThreePool/ThreePool";

function App() {
  return <div className="App">
    <Header/>
    <ThreePool/>
    <FramePools/>
    <InftablePool />
    <Delivery/>
    <Customer/>
    <Footer/>
  </div>;
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from "./components/Footer";
import './global.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Homepage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


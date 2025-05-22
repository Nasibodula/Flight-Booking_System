// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Homepage from './Pages/Homepage';
// import './global.css'
// import Footer from '../components/Footer/Footer'

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route path='/'  element={<Homepage/>}/>
//         </Routes>

//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from './Pages/Homepage';
import './global.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

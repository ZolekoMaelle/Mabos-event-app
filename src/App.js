// // import './App.css';
// import './index.css';
// //import Contact from './Pages/Contact';
// import Landing from './Pages/Landing'
// //import Details from './Pages/Details'


// function App() {
  
//   return (
//     <div >
//    <Landing/>  
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Ep from "./Pages/Ep";
import Fp from './Pages/Fp';
import Ip from './Pages/Ip';
import Sp from './Pages/Sp';
import Tp from './Pages/Tp';
import Mp from './Pages/Mp';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/ep" element={<Ep/>} />
      <Route path="/ip" element={<Ip />} />
      <Route path="/tp" element={<Tp />} />
      <Route path="/mp" element={<Mp />} />
      <Route path="/sp" element={<Sp />} />
      <Route path="/fp" element={<Fp />} />
      {/* <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<Pricing />} /> */}
    </Routes>
  );
}

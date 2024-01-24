import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Complete from './pages/Complete';
import Meditate from './pages/Meditate';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/relax' element={<Meditate />} />
            <Route path='/complete' element={<Complete />} /> 
          </Routes>
        </Router>
   
    </div>
  );
}

export default App;

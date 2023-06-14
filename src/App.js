import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

import "./styles/app.scss";
import "./styles/navbar.scss";
import "./styles/adduser.scss";
import "./styles/alluse.scss";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<Alluser/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

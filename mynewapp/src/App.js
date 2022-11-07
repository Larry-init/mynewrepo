import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from './components/pages/Homepage';
import CreateAcc from './components/pages/CreateAcc';
import Aboutus from  './components/pages/Aboutus'
import Login from './components/pages/Login';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' //routing the pages
import PagenotFound from './components/pages/PagenotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/home' element = {<Homepage />} />
          <Route exact path='/aboutus' element = {<Aboutus />} />
          <Route exact path='/createacc' element = {<CreateAcc />} />
          <Route exact path='/login' element = {<Login />} />
          <Route path='*' element = {<PagenotFound/>} />
          
      
        </Routes>
      
      
      </div>
    </Router>
  );
}

export default App;


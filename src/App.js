
import './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import ThankyouPage from './pages/ThankyouPage';
import SuccessPage from './pages/SuccessPage';
import PhoneNo from './pages/PhoneNo';
import Error404 from './pages/Error404';
import Registration from './pages/Registration';

function App() {
  return (

    <Router>
    <div className="App">
      
        <Routes>
            <Route path="/" index element={<Layout  />} />
            <Route path="/disapproved"  element={<ThankyouPage  />} />
            <Route path="/registration"  element={<Registration  />} />
            <Route path="/success"  element={<SuccessPage  />} />
            <Route path="/contact"  element={<PhoneNo  />} />
            <Route path="/*"  element={<Error404 />} />
          
        </Routes>
    
    </div>
    </Router>
   
  );
}

export default App;

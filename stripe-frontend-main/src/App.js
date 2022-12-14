import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Subscription from "./components/subscription/subscription";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/subscription-status' element={<Subscription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

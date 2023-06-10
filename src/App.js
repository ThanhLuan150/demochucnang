import './App.css';
import Header from './Components/Common/Header';
import { Routes,Route} from "react-router-dom";
import Register from './Components/Auth/RegisterPage';
import Login from './Components/Auth/LoginPage';
import Footer from './Components/Common/Footer';
import Homepage from './Components/Hompage/Homepage';
function App() {
  return (
    <div>
      <Header/>
      <Routes> 
          <Route path='/' element={<Homepage></Homepage>} />
          <Route path='/Login' element={<Login></Login>} />
          <Route path='/Signup' element={<Register></Register>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

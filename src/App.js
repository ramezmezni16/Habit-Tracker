import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login"
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/Home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import "./App.css";
import Home from "./pages/Home";
import AddNewNotess from './pages/AddNewNotess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path='/new-note' element={<AddNewNotess/>} />
        </Routes>
      </Router>
      
      <div className="">
      

       
      

       
      </div>
    </div>
  );
}

export default App;

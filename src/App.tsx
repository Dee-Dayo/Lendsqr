import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogIn from "./pages/Auth/Login/login";

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
         <Route path="/login" element={<LogIn/>}/>
       </Routes>
     </Router>
  );
}

export default App;

import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogIn from "./pages/Auth/Login/login";
import Layout from "./components/Layout/Layout";

function App() {
  return (
     <Router>
       <Routes>
           <Route path="/" element={<Navigate to="/login" />} />
           <Route path="/login" element={<LogIn/>}/>
           <Route path="/" element={<Layout/>}>
               <Route path="dashboard"/>
           </Route>
       </Routes>
     </Router>
  );
}

export default App;

import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";
import Dashboard2 from "./views/Dashboard2";
import Details from "./views/Details";
import Main from "./views/Main";
import TestComponent from "./views/TestComponent";
import Update from "./views/Update";
function App() {
  return (
    <BrowserRouter>
    <h1> Song fullstack Demo</h1>
    <Link to="/testapi"> Test backend</Link> | 
    <Link to="/songs"> Song dashboard</Link> |
    <Link to="/songs2"> Song dashboard2</Link> |
    <Link to="/songs/new"> Create new songs</Link>

    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/testapi" element={<TestComponent />} />
      <Route path="/songs" element={<Dashboard />} />
      <Route path="/songs2" element={<Dashboard2 />} />
      <Route path="/songs/new" element={<Create />} />
      <Route path="/songs/:id" element={<Details />} />
      <Route path="/songs/:id/edit" element={<Update />} />
      <Route path="*" element={<><h1>Error</h1></>} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;

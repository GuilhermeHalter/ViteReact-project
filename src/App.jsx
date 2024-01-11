import NavBar from './Components/NavBar';

import { Outlet } from 'react-router-dom';

import './App.css';


function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet/>
      </div>
    </>
  )
}

export default App

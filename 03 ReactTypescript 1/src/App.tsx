import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectList from './Components/ProjectList';
import Events from './Components/Events';
import UseState from './Components/UseState';
import UseContextReducer from './Components/UseContextReducer';
import Interfaces from './Components/Interfaces';
import RegistrationForm from './Components/RegistrationFrom';
import Login from './Components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Menu">
          <div className="logo"> Project</div>
          <div className="menuItems">
            <Link to="/" className="Home">
              Home
            </Link>
            <Link to={'/events'} className="Home">
              Events
            </Link>
            <Link className="Home" to={'/useState'}>
              UseState
            </Link>
            <Link className="Home" to={'/useContext'}>
              UseContext
            </Link>
            <Link className="Home" to={'/interfaces'}>
              Interfaces
            </Link>
            <Link className="Home" to={'/Register'}>
              Register
            </Link>
            <Link className="Home" to={'/Login'}>
              Login
            </Link>
          </div>
        </div>

        <Routes>
          <Route path={'/'} element={<ProjectList />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/useState'} element={<UseState />} />
          <Route path={'/useContext'} element={<UseContextReducer />} />
          <Route path={'/interfaces'} element={<Interfaces />} />
          <Route path={'/register'} element={<RegistrationForm />} />
          <Route path={'/Login'} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

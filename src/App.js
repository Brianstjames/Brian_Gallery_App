import "bootstrap/dist/css/bootstrap.min.css";
import "./components/assets/styles/baselayout.css";
import Home from './components/Home';
import SignUpForm from './components/sub-components/SignUpForm';
import LogInForm from './components/sub-components/LogInForm';
import Navbar from './components/layout/Navbar';
import DataRoute from './components/sub-components/DataRoute';
import Auth from './components/sub-components/Auth';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  json,
} from 'react-router-dom';
import { render } from "@testing-library/react";
import ImagesPage from "./components/sub-components/ImagesPage";
import FavoritesPage from "./components/sub-components/FavoritesPage";






export default function App() {
  return <>
      <Router>
        <Navbar />
        <div className="app app-div">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUpForm/>} />
            <Route path="/login" element={<LogInForm/>} />
            <Route path="/images" element={<ImagesPage/>} />
            <Route path="/favorites" element={<FavoritesPage/>} />
            <Route path="/protected-page" element={
                <Auth>
                  <DataRoute/>
                </Auth>
              } />
            <Route path="*" element={<Navigate to='/'/>} />
          </Routes>
        </div>
      </Router>
    </>;
}

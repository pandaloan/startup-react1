import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));

    
export default function App() {
    return (
    <BrowserRouter>  
      <div>
        <header className='container-fluid'>
          <nav>
            <div className='navbar-brand'>
              Connect4<sup>&reg;</sup>
              <p>connected to the internet</p>
              <p> + Nirvana Trivia</p>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='index'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='scores'>
                  Scores
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='play'>
                  Play!
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>
  
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer>  
          <div className='container-fluid'>
            <span className='text-reset'>Author Name:</span>
            <p>Albino Chipmunk</p>
            <a className='text-reset' href="https://github.com/pandaloan/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
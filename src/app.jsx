export default function App() {
    return (
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
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='scores.html'>
                  Scores
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>
                  Play!
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer>  
          <div className='container-fluid'>
            <span className='text-reset'>Author Name:</span>
            <p>Albino Chipmunk</p>
            <a className='text-reset' href="https://github.com/pandaloan/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
    );
  }
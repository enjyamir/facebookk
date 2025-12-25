import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="facebook-logo">f</div>
        <button className="confirm-btn">Confirm</button>
      </div>

      <div className="navbar-center">
        <div className="nav-icon active">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"/>
          </svg>
        </div>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"/>
            <path d="M1 6c0-2.21 1.79-4 4-4h14a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-3.5v3.197a1.25 1.25 0 0 1-2.013.988L9.5 18H5a4 4 0 0 1-4-4V6z"/>
          </svg>
        </div>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5a9.457 9.457 0 0 1-2.065 5.918c-.416-.396-.933-.712-1.485-.934a8.097 8.097 0 0 0-2.675-.63L15.5 15H8.5l.225 1.854a8.097 8.097 0 0 0-2.675.63c-.552.222-1.07.538-1.485.934A9.457 9.457 0 0 1 2.5 12z"/>
          </svg>
        </div>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12c0 3.032-1.175 5.79-3.093 7.853a.5.5 0 0 1-.752-.665A9.457 9.457 0 0 0 21.5 12c0-5.247-4.253-9.5-9.5-9.5S2.5 6.753 2.5 12a9.457 9.457 0 0 0 1.845 7.188.5.5 0 0 1-.752.665A11.452 11.452 0 0 1 .5 12z"/>
          </svg>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1a3 3 0 0 0-3 3v.5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-4V4a3 3 0 0 0-3-3z"/>
          </svg>
        </button>
        <button className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.5 1.5 0 0 0 4 22h.5l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </button>
        <button className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9.5a9 9 0 1 1 18 0v.75a8.25 8.25 0 0 1-8.25 8.25H12a8.25 8.25 0 0 1-8.25-8.25V9.5z"/>
          </svg>
        </button>
        <div className="user-avatar-small">J</div>
      </div>
    </nav>
  );
};

export default Navbar;

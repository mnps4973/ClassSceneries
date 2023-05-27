import './Welcome.css';

import logo from '../../assets/logo/dark_with_text.png';

export default function Welcome(){
    return(
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="btn startbutton" href="/classroom">Start</a>
            </header>
        </div>
    );
} 
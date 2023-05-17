import classroom from '../../assets/classroom.png';
import './Activity1.css';

import { FaUserCircle, FaArrowAltCircleLeft, FaVolumeUp } from 'react-icons/fa';

export default function Activity1(){
    return(
        <div className="classroom min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}>
            <a className="btn" href="/classroom"><FaArrowAltCircleLeft className="chalkboard"/></a>
            <a className="btn"><FaUserCircle className="profile"/></a>
            <div className="activity1-explanation">
                <h1>This is the beginning of the class when everyone is still coming.</h1>
                <h1>How would you start the class?</h1>
                <h1>Choose the most suitable options to start the day</h1>

                <div className="grid-container">
                    <a className="btn grid-item"><p>Wait until everyone is in class</p></a>
                    <a className="btn grid-item"><p>Play a short game that the kids know</p></a>
                    <a className="btn grid-item"><p>Start distributing papers for the class</p></a>
                    <a className="btn grid-item"><p>Ask the kids how they are doing</p></a>
                    <a className="btn grid-item"><p>Ask about homework</p></a>
                    <a className="btn grid-item"><p>Go directly to the topic of the day</p></a>
                    <a className="btn grid-item"><p>“Hello, everyone! We have a test today!”</p></a>
                    <a className="btn grid-item"><p>“Hi, Laura! You look very nice today!”</p></a>
                    <a className="btn grid-item"><p>“Hello, Laura! How is your day going?”</p></a>
                </div>
                
                <a className="btn"><FaVolumeUp className="sound"/></a>
            </div>            
        </div>
    );
}
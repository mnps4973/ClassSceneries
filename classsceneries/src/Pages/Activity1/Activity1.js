import classroom from '../../assets/classroom.png';
import './Activity1.css';

import { FaUserCircle, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Activity1(){
    return(
        <div className="classroom min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}>
            <a className="btn" href="/classroom"><FaArrowAltCircleLeft className="chalkboard"/></a>
            <a className="btn"><FaUserCircle className="profile"/></a>            
        </div>
    );
}
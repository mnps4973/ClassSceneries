import classroom from '../../assets/classroom.png';
import './Classroom.css';

import { FaUserCircle, FaChalkboardTeacher } from 'react-icons/fa';

export default function Classroom(){
    return(
        <div className="classroom min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}>
            <a className="btn"><FaChalkboardTeacher className="chalkboard"/></a>
            <a className="btn"><FaUserCircle className="profile"/></a>
            <a className="activity activity-1 btn" href="/classroom"></a>
            <a className="activity activity-2 btn" href="/classroom"></a>
            <a className="activity activity-3 btn" href="/classroom"></a>
            <a className="activity activity-4 btn" href="/classroom"></a>
            <a className="activity activity-5 btn" href="/classroom"></a>
            <a className="activity activity-6 btn" href="/classroom"></a>
            <a className="activity activity-7 btn" href="/classroom"></a>
            <a className="activity activity-8 btn" href="/classroom"></a>
        </div>
    );
}
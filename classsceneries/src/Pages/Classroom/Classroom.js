import classroom from '../../assets/classroom.png';
import './Classroom.css';

import { FaUserCircle, FaChalkboardTeacher } from 'react-icons/fa';

export default function Classroom(){
    return(
        <div className="classroom min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}>
            <a className="btn"><FaChalkboardTeacher className="chalkboard"/></a>
            <a className="btn"><FaUserCircle className="profile"/></a>
            <a className="activity activity-1 btn" href="/classroom" alt="Start a class" title="Start a class"></a>
            <a className="activity activity-2 btn" href="/classroom" alt="Safety in the classroom" title="Safety in the classroom"></a>
            <a className="activity activity-3 btn" href="/classroom" alt="Group activities" title="Group activities"></a>
            <a className="activity activity-4 btn" href="/classroom" alt="Individual work" title="Individual work"></a>
            <a className="activity activity-5 btn" href="/classroom" alt="Managing conflicts" title="Managing conflicts"></a>
            <a className="activity activity-6 btn" href="/classroom" alt="Unpredicted behaviour" title="Unpredicted behaviour"></a>
            <a className="activity activity-7 btn" href="/classroom" alt="Preparation, explanation and distribution of tasks" title="Preparation, explanation and distribution of tasks"></a>
            <a className="activity activity-8 btn" href="/classroom" alt="End the class" title="End the class"></a>
        </div>
    );
}
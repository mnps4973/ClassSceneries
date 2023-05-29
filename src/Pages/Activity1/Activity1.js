import classroom from '../../assets/classroom.png';
import './Activity1.css';

import Popup from '../../Components/Popup/Popup';  

import { FaUserCircle, FaArrowAltCircleLeft, FaVolumeUp } from 'react-icons/fa';

var points = 0;
var clicked = [];

const min_points = 0;

export default function Activity1(){
    const data1 = {
        id: '1',
        type: 'Wrong!',
        text: 'Feel free to start connecting with students even if everyone hasn\'t arrived yet. This is a great chance for tutors to gain a deeper understanding of their students.',  
    };
    const data2 = {
        id: '2',
        type: 'Right!',
        text: 'When students enter the classroom, they are transitioning from a different environment and may not be fully focused on their studies. To help them adjust, it is recommended to start the class with a brief, familiar activity known as a ritual. This playful activity can be changed from time to time, but it should have simple rules that are easy to understand. Additionally, the ritual can be related to the skills and habits students should practice during their studies.',
    };
    const data3 = {
        id: '3',
        type: 'Wrong!',
        text: 'Starting a class by discussing anything related to the learning process is highly discouraged. This can exacerbate anxiety in students who require ample time to adapt to their studies.',
    };
    const data4 = {
        id: '4',
        type: 'Right!',
        text: 'While waiting for everyone to arrive, use this opportunity to engage with students and ensure their well-being. Establishing trust and maintaining a strong relationship is crucial in your role as a tutor. Make sure to take advantage of this time to build rapport and foster a positive learning environment.',
    };
    const data5 = {
        id: '5',
        type: 'Wrong!',
        text: 'Although homework is an essential component of the class, it can be overwhelming for students to immerse themselves in their studies right after class.',
    };
    const data6 = {
        id: '6',
        type: 'Wrong!',
        text: 'It is advisable to provide students with enough time to adjust to the new environment.',
    };
    const data7 = {
        id: '7',
        type: 'Wrong!',
        text: 'It\'s not recommended to begin a class by talking about tests or anything related to the learning process. This can increase anxiety in students who need time to adjust to their studies. Testing is already stressful enough, so it\'s important to consider the timing and approach when announcing them.',
    };
    const data8 = {
        id: '8',
        type: 'Wrong!',
        text: 'Focusing too much on appearance can lead students to form incorrect beliefs about the importance of their looks, and may even cause some to feel insecure. Therefore, during class, it is important for tutors to maintain a friendly yet professional demeanor and concentrate on topics related to learning.',
    };
    const data9 = {
        id: '9',
        type: 'Right!',
        text: 'To provide effective feedback, teachers should address students by name and specify their behavior. Instead of giving generic feedback like \"Don\'t touch him,\" teachers should acknowledge the student\'s positive actions, like \"Great job keeping your hands to yourself, Laura!\"',
    };

    return(
        <div className="classroom min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}>
            <a className="btn" href="/classroom"><FaArrowAltCircleLeft className="chalkboard"/></a>
            <a className="btn"><FaUserCircle className="profile"/></a>
            <div className="activity1-explanation">
                <div className="activity1-question">
                    <h1>This is the beginning of the class when everyone is still coming.</h1>
                    <h1>How would you start the class?</h1>
                    <h1>Choose the most suitable options to start the day</h1>
                </div>

                <Popup data={data1} />
                <Popup data={data2} />
                <Popup data={data3} />
                <Popup data={data4} />
                <Popup data={data5} />
                <Popup data={data6} />
                <Popup data={data7} />
                <Popup data={data8} />
                <Popup data={data9} />

                <div className="grid-container">
                    <a className="btn grid-item" id="1"><p>Wait until everyone is in class</p></a>
                    <a className="btn grid-item" id="2"><p>Play a short game that the kids know</p></a>
                    <a className="btn grid-item" id="3"><p>Start distributing papers for the class</p></a>
                    <a className="btn grid-item" id="4"><p>Ask the kids how they are doing</p></a>
                    <a className="btn grid-item" id="5"><p>Ask about homework</p></a>
                    <a className="btn grid-item" id="6"><p>Go directly to the topic of the day</p></a>
                    <a className="btn grid-item" id="7"><p>“Hello, everyone! We have a test today!”</p></a>
                    <a className="btn grid-item" id="8"><p>“Hi, Laura! You look very nice today!”</p></a>
                    <a className="btn grid-item" id="9"><p>“Hello, Laura! How is your day going?”</p></a>
                </div>
                
                
                <a className="btn"><FaVolumeUp className="sound"/></a>
                <p id="points1" className="points">Points: {points}</p>
            </div>          
        </div>
    );

}
function showPop(id){
    let id_str = "" + id;

    if(!(clicked.find(element => element == id))) {
        if((id == 1 || id == 3 || id == 5 || id == 6 || id == 7 || id == 8)){
            if (points > min_points) points -= 1;
            if(document.getElementById(id_str)) document.getElementById(id_str).style.backgroundColor = 'red';
        } else if (id == 2 || id == 4 || id == 9){
            points += 2;    
            if(document.getElementById(id_str)) document.getElementById(id_str).style.backgroundColor = 'green';
        }
        clicked.push(id);
    }

    const show = 'pop' + id;
    document.getElementById(show).style.display = 'block';

    
}

setTimeout(function(){
    if(document.getElementById('1')) document.getElementById('1').addEventListener('click', (event) => showPop(1), false);
    if(document.getElementById('2')) document.getElementById('2').addEventListener('click', (event) => showPop(2), false);
    if(document.getElementById('3')) document.getElementById('3').addEventListener('click', (event) => showPop(3), false);
    if(document.getElementById('4')) document.getElementById('4').addEventListener('click', (event) => showPop(4), false);
    if(document.getElementById('5')) document.getElementById('5').addEventListener('click', (event) => showPop(5), false);
    if(document.getElementById('6')) document.getElementById('6').addEventListener('click', (event) => showPop(6), false);
    if(document.getElementById('7')) document.getElementById('7').addEventListener('click', (event) => showPop(7), false);
    if(document.getElementById('8')) document.getElementById('8').addEventListener('click', (event) => showPop(8), false);
    if(document.getElementById('9')) document.getElementById('9').addEventListener('click', (event) => showPop(9), false);
}, 1000);

setInterval(function(){
    if(document.getElementById('points1')){
        document.getElementById('points1').innerHTML = 'Points: ' + points;
    }
}, 3000);


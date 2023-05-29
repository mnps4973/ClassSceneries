import classroom from '../../assets/classroom.png';
//import './Activity4.css';

import TrueFalse from '../../Components/TrueFalse/TrueFalse';
import { FaUserCircle, FaArrowAltCircleLeft, FaVolumeUp } from 'react-icons/fa';

var points = 0;
const min_points = 0;
const act = 4;

var agree_id = 'agree41';
var disagree_id = 'disagree41';

export default function Activity4(){
    const data1 = {
        activity: act,
        id: 1,
        statement: 'A tutor should help to finish the task for a student if they are out of time',
        value: false,
        explanation: 'It is not appropriate for a tutor to help a student finish a task if they are out of time because it goes against the purpose of the task, which is to assess the student\'s understanding and ability. Additionally, it can create an unfair advantage for the student and undermine the integrity of the task. It is important for tutors to provide guidance and support to students, but not to the extent that it compromises the authenticity and validity of the assessment. It is also important to remember that all students work at their own pace.',
    };

    const data2 = {
        activity: act,
        id: 2,
        statement: 'A tutor should write in the student\'s worksheet',
        value: false,
        explanation: 'It is considered wrong to write on a student\'s worksheet as it goes against their autonomy, hinders their critical thinking and problem-solving abilities, inhibits learning from mistakes, undermines academic integrity, diminishes their confidence and self-esteem, limits their creativity and personal expression, and misses opportunities for targeted feedback.',
    };

    const data3 = {
        visibility: false,
        activity: act,
        id: 3,
        statement: 'A tutor shouldn\'t show a student how to use tools or materials safely',
        value: false,
        explanation: 'It is crucial to prioritize teaching students how to safely use tools and materials. Neglecting this responsibility could result in accidents or injuries, as well as a lack of confidence in the student. This lack of confidence could ultimately hinder their ability to complete tasks effectively. Equip your students with the necessary skills and knowledge to use tools and materials safely, providing guidance and support throughout the task.',
    };

    const data4 = {
        activity: act,
        id: 4,
        statement: 'A tutor should remind to the students how much time do they have',
        value: true,
        explanation: 'It is helpful to gently remind students of their remaining time to aid them in managing their time efficiently and completing tasks within the given timeframe. This can instill a sense of satisfaction and productivity, ultimately boosting their motivation and engagement. Furthermore, it can prevent students from feeling rushed or overwhelmed, reducing the risk of producing subpar work or errors.',
    };

    const data5 = {
        activity: act,
        id: 5,
        statement: 'A tutor should pay attention to every student',
        value: true,
        explanation: 'It is important for a tutor to pay attention to every student because it allows them to monitor progress, identify areas of struggle, and offer individualized guidance and support. This approach promotes a sense of accountability and responsibility among students, as well as a positive and inclusive learning environment. Additionally, it can prevent students from feeling neglected or ignored, which can have a negative impact on their motivation, engagement, and overall academic performance.',
    };

    const data6 = {
        activity: act,
        id: 6,
        statement: 'A tutor shouldn\'t walk around the class while student work on the tasks',
        value: true,
        explanation: 'It is recommended that tutors refrain from walking around the classroom while students are working, as it can lead to several negative outcomes. These include causing distractions, invading personal space, disrupting independent work, increasing dependency, inhibiting creativity and exploration, creating unequal attention distribution, and disrupting student interactions.',
    };



    return(
        <>
            <div className="classroom_activity min-vh-100 bg-image" style={{backgroundImage:`url(${classroom})`}}></div>
            <div>
                <a className="btn chalkboardbtn" href="/classroom"><FaArrowAltCircleLeft className="chalkboard"/></a>
                <a className="btn profilebtn"><FaUserCircle className="profile"/></a>
                <a className="btn soundbtn"><FaVolumeUp className="sound"/></a>
                <p id="points4" className="points">Points: {points}</p>

                <TrueFalse data={data1}></TrueFalse>
                <TrueFalse data={data2}></TrueFalse>
                <TrueFalse data={data3}></TrueFalse>
                <TrueFalse data={data4}></TrueFalse>
                <TrueFalse data={data5}></TrueFalse>
                <TrueFalse data={data6}></TrueFalse>

            </div>
        </>
    );

}

setInterval(function(){
    if(document.getElementById('points4')){
        document.getElementById('points4').innerHTML = 'Points: ' + points;
    }

    if(document.getElementById('tf41') && document.getElementById('tf41').style.display == 'block'){
        agree_id = "agree" + act + 1;
        disagree_id = "disagree" + act + 1;
    }
    if(document.getElementById('tf42') && document.getElementById('tf42').style.display == 'block'){
        agree_id = "agree" + act + 2;
        disagree_id = "disagree" + act + 2;
    }
    if(document.getElementById('tf43') && document.getElementById('tf43').style.display == 'block'){
        agree_id = "agree" + act + 3;
        disagree_id = "disagree" + act + 3;
    }
    if(document.getElementById('tf44') && document.getElementById('tf44').style.display == 'block'){
        agree_id = "agree" + act + 4;
        disagree_id = "disagree" + act + 4;
    }
    if(document.getElementById('tf45') && document.getElementById('tf45').style.display == 'block'){
        agree_id = "agree" + act + 5;
        disagree_id = "disagree" + act + 5;
    }
    if(document.getElementById('tf46') && document.getElementById('tf46').style.display == 'block'){
        agree_id = "agree" + act + 6;
        disagree_id = "disagree" + act + 6;
    }
    
}, 3000);



export function showPopAgree(id, act){
    const pop_id = 'pop' + act + id;
    document.getElementById(pop_id).style.display = 'block';

    switch(id){
        case 1:
            if(points > min_points) points -= 1;
            break;
        case 2:
            if(points > min_points) points -= 1;
            break;
        case 3:
            if(points > min_points) points -= 1;
            break;
        case 4:
            points += 2;
            break;
        case 5:
            points += 2;
            break;
        case 6:
            points += 2;
            break;
    };
}

export function showPopDisagree(id, act){
    const pop_id = 'pop' + act + id;
    document.getElementById(pop_id).style.display = 'block';
    switch(id){
        case 1:
            points += 2;
            break;
        case 2:
            points += 2;
            break;
        case 3:
            points += 2;
            break;
        case 4:
            if(points > min_points) points -= 1;
            break;
        case 5:
            if(points > min_points) points -= 1;
            break;
        case 6:
            if(points > min_points) points -= 1;
            break;
    };
}
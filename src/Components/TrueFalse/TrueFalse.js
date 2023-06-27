import './TrueFalse.css';

function showPopAgree(id, act){
    const pop_id = 'pop' + act + id;
    document.getElementById(pop_id).style.display = 'block';
}

function showPopDisagree(id, act){
    const pop_id = 'pop' + act + id;
    document.getElementById(pop_id).style.display = 'block';
}

export default function TrueFalse({data}){
    const id_str = "tf" + data.activity + data.id;
    const agree_id = "agree" + data.activity + data.id;
    const disagree_id = "disagree" + data.activity + data.id;
    
    setTimeout(function(){
        if(document.getElementById('tf41')){
            document.getElementById('tf41').style.display = 'block';
        }

        if(document.getElementById(agree_id))
            document.getElementById(agree_id).addEventListener('click', (event) => showPopAgree(data.id, data.activity), false);
        if(document.getElementById(disagree_id))
            document.getElementById(disagree_id).addEventListener('click', (event) => showPopDisagree(data.id, data.activity), false);
        
    }, 1000);

    

    return(
        <>
            
            <div id={id_str} className="exercise">
                <div className="statement">
                    <h2>{data.statement}</h2>
                </div>
                <div className="buttons">
                    <a id={agree_id} className="btn truefalsebtn true">AGREE</a>
                    <a id={disagree_id} className="btn truefalsebtn false">DISAGREE</a>
                </div>
                
            </div>
        </>
    );
}





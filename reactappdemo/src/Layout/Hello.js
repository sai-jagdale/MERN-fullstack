import {useNavigate} from 'react-router-dom';

function Hello(){
    const navigate = useNavigate();

    return(
        <div>
            <h2>Wellcome to transflower</h2>
            <button className="btn btn-primary" onClick={() => navigate("/goodbye")}>GoodBye</button>
        </div>
    );
}

export default Hello;
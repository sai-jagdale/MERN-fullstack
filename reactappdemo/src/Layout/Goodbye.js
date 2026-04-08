import {useNavigate} from 'react-router-dom';

function Goodbye(){
    const navigate = useNavigate();
    
    return( 
        <div>
            <h2>Goodbye from Transflower</h2>
            <button className="btn btn-primary" onClick={() => navigate("/")}>Hello</button>
        </div>
    );
}

export default Goodbye;
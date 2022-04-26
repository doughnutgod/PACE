import {useState} from 'react';
import Popup from './Popup';
import Backdrop from './Backdrop';

function Card(props){
    const[popupActive, setPopupActive] = useState(false);


    function handleClick() {
        setPopupActive(true)
        console.log("CLICKED")
        console.log(props.cardHeader)
    }

    function closePopupHandler() {
        setPopupActive(false);
    }


    return(
        <div className="card">
            <h2>{props.cardHeader}</h2>
            <div className="button-container">
                <button className="button" onClick={handleClick}>Press Me!</button>
            </div>

            {popupActive && <Popup onCancel={closePopupHandler} onConfirm={closePopupHandler}/>}
            {popupActive && <Backdrop onClick={closePopupHandler}/>}
        </div>
    );
}

export default Card;
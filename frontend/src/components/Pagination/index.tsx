import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { useState } from 'react';
import './styles.css';

const Pagination = () => {

    const [isArrowLeftDisabled, setArrowLeftDisabled] = useState(true);
    const [isArrowRightDisabled, setArrowRightDisabled] = useState(false);

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={isArrowLeftDisabled} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={isArrowRightDisabled} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
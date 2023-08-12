import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import './Detail.css';

function Detail(props){
    const location=useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state === null){
            navigate('/'); //home으로 되돌아 가는 기능
        }
    });

    if (location.state){
        return (
        <div className="detail__container">
            <span>{location.state.summary}</span>
        </div>
        )
    }
    return null;
}

export default Detail;
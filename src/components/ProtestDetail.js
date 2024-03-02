import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function ProtestDetail(props) {
    let title = props.title
    let info = props.info


    return (
        <div>
        <Popup trigger=
            {<button className="btn btn-secondary"> Read More </button>}
            position="top left">
                    <h2> {title} </h2><div><h3>{info}</h3></div>
        </Popup>
    </div>
    )

}
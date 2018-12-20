import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <section className="input-section">
            <section class="center-sec">
                <h2>Change your name below.</h2>
                <input onChange={props.userUpdate} value={props.username} type="text" />
            </section>
        </section>
    )
};

export default userInput;
import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <section className="user-output">
            <p>Hi, my name is <span>{props.username}</span>. I am here to rule the internet by using amazing design and maintainable code!</p>
        </section>
    )
};

export default UserOutput;
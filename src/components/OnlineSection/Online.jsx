import React from 'react';
import { Link } from 'react-router-dom';
import './Online.css';

const Online = () => {
    return (
        <section className = "online">
            <h1>Enroll for our various online courses<br /> from the comfort of your home</h1>
            <Link to = "/contact" className = "hero-btn">Contact Us</Link>
        </section>
    )
}

export default Online

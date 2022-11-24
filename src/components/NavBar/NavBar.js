import React, { useState } from 'react';
import HoverBox from '../HoverBox/HoverBox';
import { Link } from 'react-router-dom';

function NavBar() {
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeHome, setActiveHome] = useState(true);
    const [activeContact, setActiveContact] = useState(false);
    return (
        <nav class='py-7 sticky top-0 flex justify-evenly'>
            <HoverBox content={"About"}  to="about"/>
            <HoverBox content={"Home"} to="/"/>
            <HoverBox content={"Contact"} to="contact"/>
        </nav>
    );
}

export default NavBar;
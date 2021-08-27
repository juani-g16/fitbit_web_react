import React from 'react';
import classes from '.././Topbar.module.css'

const Topbar = (props) =>{
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src=".././NicePng_amazon-logo-png_167642.png" alt="amazon logo"/>
            </nav>
        </header>
    );
}

export default Topbar;
import React from 'react';
import { Image } from 'react-bootstrap';
import { ThemeContext } from './theme-context';
import moon from '../img/moon-outline.svg'

let ThemedButton = () => {
    return (
        <ThemeContext.Consumer>
            
            <Image src={moon} style={{ height:'1.2rem'}}/>

        </ThemeContext.Consumer>
    )
    
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

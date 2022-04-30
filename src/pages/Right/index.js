import React from 'react';
import { render } from 'react-dom';
import Right from './Right';

console.log('some shit')

console.log('more shit')

const RightContainer = document.createElement("aside")
    RightContainer.id = "right-panel"
    
document.body.appendChild(RightContainer)



const shit = document.querySelector('#right-panel')

console.log(shit)

render(<Right />, document.querySelector('#right-panel'));

if (module.hot) module.hot.accept();

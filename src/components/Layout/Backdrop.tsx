import React from 'react';
import './Backdrop.css'

const backdrop = (props) => (
    <div className='Backdrop' >
        {props.children}
    </div>
)



export default backdrop
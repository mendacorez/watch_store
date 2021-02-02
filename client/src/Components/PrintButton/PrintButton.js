import React from 'react';
import classes from './PrintButton.module.css'

const PrintButton = () => {
    
    const Print = (e) => {
        window.print(e);
    }
    
    return (
        <div className={classes.prints}>
            <button 
                class="btn btn-sm btn-dark"
                onClick={(e) => Print(e)}
            >
                Печать
            </button>
        </div>
    );
}

export default PrintButton;
import React from 'react';
import classes from './ClientPage.module.css';
import ClientHeader from './ClientHeader/ClientHeader';
import ClientMain from './ClientMain/ClientMain';

const ClientPage = () => {
    return(
            <div className={classes.container}> 
                <ClientHeader />
                <ClientMain /> 
            </div>
    );
}

export default ClientPage;
import React from 'react';
import classes from './AdminPage.module.css';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminMain from './AdminMain/AdminMain';

const ClientPage = () => {
    return(
            <div className={classes.container}> 
                <AdminHeader />
                <AdminMain />
            </div>
    );
}

export default ClientPage;
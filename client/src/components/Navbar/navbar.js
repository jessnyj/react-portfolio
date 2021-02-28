import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

function Navbar() {
    return (

        < Paper >
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Paper >

    );
}


export default Navbar;
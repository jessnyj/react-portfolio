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
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Contact" />
            </Tabs>
        </Paper >

    );
}


export default Navbar;
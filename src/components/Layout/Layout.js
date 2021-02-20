import React from 'react';

import styles from "./Layout.module.css"

import Wrapper from "../../hoc/Wrapper"

const Layout = (props) => {
    return (
        <Wrapper>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;
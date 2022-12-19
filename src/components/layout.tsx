import React from 'react'
import * as styles from '../../styles/Home.module.css'
import "../../styles/globals.css"
import NavBar from './navbar'

export default function Layout({ children } : { children: any }) {
    return (
        <div className={styles.container}>
            <NavBar />
            <br/>
            {children}
        </div>
    )
}
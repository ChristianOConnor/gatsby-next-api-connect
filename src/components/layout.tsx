import React from 'react'
import * as styles from '../../styles/Home.module.css'
import "../../styles/globals.css"

export default function Layout({ children } : { children: any }) {
    return (
        <div className={styles.container}>
            <br/>
            {children}
        </div>
    )
}
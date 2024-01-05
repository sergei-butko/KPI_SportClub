import React from 'react';
import styles from './layout.module.css'


function AuthLayout({
                          children,
                      }: {
    children: React.ReactNode
}) {
    return (
        <main className={`${styles.container} bg-no-repeat bg-cover`}>
            <div className="container mx-auto lg:px-52 px-3 flex justify-center h-screen bg-center">
                {children}

            </div>
        </main>
    )
}


export default AuthLayout;